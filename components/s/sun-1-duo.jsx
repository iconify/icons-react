import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a3uqn7ikc.css';
import '../../css/t/t-a51bc3y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a3uqn7ikc"/><path class="t-a51bc3y"/></g>`,
		"fallback": "glyphs:sun-1-duo",
	});
}

export default Component;
