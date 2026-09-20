import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8pxjbblv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8pxjbblv"/>`,
		"fallback": "streamline:interface-arrows-corner-down-right-down-keyboard-arrow-right-bottom",
	});
}

export default Component;
