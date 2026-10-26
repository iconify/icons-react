import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys47xybbc.css';
import '../../css/r/r32otac5i.css';
import '../../css/w/w3t__6b8m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys47xybbc"/><path class="r32otac5i"/><path class="w3t__6b8m"/>`,
		"fallback": "thesvg:tandoor-recipes",
	});
}

export default Component;
