import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slusnzvff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slusnzvff"/>`,
		"fallback": "coolicons:trash-round",
	});
}

export default Component;
