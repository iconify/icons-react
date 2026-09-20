import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3srjgb0a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c3srjgb0a"/>`,
		"fallback": "streamline:rotate-angle-45-solid",
	});
}

export default Component;
