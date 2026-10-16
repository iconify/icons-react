import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/deifvsb6z.css';
import '../../css/z/z1sgf4tcb.css';

const viewBox = {"width":367.64,"height":360.14,"left":-3.82,"top":-0.07};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="deifvsb6z"/><path class="z1sgf4tcb"/>`,
		"fallback": "thesvg-color:kubeedge-dark",
	});
}

export default Component;
