import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mquls_bam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mquls_bam"/>`,
		"fallback": "coolicons:quote-single-left-duotone-round",
	});
}

export default Component;
