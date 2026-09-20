import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5ys0yb_e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5ys0yb_e"/>`,
		"fallback": "streamline:interface-text-formatting-left-align-paragraph-text-alignment-align-left-formatting-right",
	});
}

export default Component;
