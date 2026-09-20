import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwtl91x7b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwtl91x7b"/>`,
		"fallback": "streamline:interface-edit-flip-left-flip-left-object-work",
	});
}

export default Component;
