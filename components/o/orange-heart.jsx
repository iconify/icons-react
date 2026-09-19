import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6uetzpvg.css';
import '../../css/g/g75cc2fkj.css';
import '../../css/h/hsw65cfsq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w6uetzpvg"/><path class="g75cc2fkj"/><ellipse transform="rotate(30 23.477 12.594)" class="hsw65cfsq"/></g>`,
		"fallback": "fluent-emoji-flat:orange-heart",
	});
}

export default Component;
