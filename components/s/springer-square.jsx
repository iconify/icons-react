import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa_y83bac.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa_y83bac"/>`,
		"fallback": "academicons:springer-square",
	});
}

export default Component;
