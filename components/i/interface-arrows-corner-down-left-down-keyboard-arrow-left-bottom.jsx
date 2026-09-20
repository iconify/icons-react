import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zli93rbnp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zli93rbnp"/>`,
		"fallback": "streamline:interface-arrows-corner-down-left-down-keyboard-arrow-left-bottom",
	});
}

export default Component;
