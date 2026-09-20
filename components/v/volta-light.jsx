import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw04xcb-w.css';

const viewBox = {"width":778,"height":222};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw04xcb-w"/>`,
		"fallback": "thesvg-color:volta-light",
	});
}

export default Component;
