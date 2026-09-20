import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwz6ptbcr.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwz6ptbcr"/>`,
		"fallback": "picon:pi",
	});
}

export default Component;
