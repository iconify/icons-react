import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ujv6n5bmi.css';
import '../../css/l/lauwqs8mt.css';
import '../../css/l/l5q_j8fuy.css';
import '../../css/v/vx6mszb2a.css';
import '../../css/w/wp57mfoga.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ujv6n5bmi"/><path clip-rule="evenodd" class="lauwqs8mt"/><path class="l5q_j8fuy"/><path clip-rule="evenodd" class="vx6mszb2a"/><path clip-rule="evenodd" class="wp57mfoga"/></g>`,
		"fallback": "pepicons-pencil:truck",
	});
}

export default Component;
