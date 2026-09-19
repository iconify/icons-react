import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz-0r32uk.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz-0r32uk"/>`,
		"fallback": "f7:suit-spade-fill",
	});
}

export default Component;
