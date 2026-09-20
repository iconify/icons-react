import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj5ssyykk.css';

const viewBox = {"width":224,"height":224};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj5ssyykk"/>`,
		"fallback": "thesvg-color:rust-light",
	});
}

export default Component;
