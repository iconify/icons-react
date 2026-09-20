import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/amzadabst.css';
import '../../css/d/dyxn8wbmd.css';
import '../../css/q/q4stomzyj.css';
import '../../css/h/ho31hqnzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="amzadabst"/><path class="dyxn8wbmd"/><path class="q4stomzyj"/><path class="ho31hqnzp"/></g>`,
		"fallback": "reicon:msg-writing",
	});
}

export default Component;
