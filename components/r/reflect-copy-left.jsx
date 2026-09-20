import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzz2v3bok.css';
import '../../css/c/c3y7nqned.css';
import '../../css/h/huqnwlvew.css';
import '../../css/h/hi72lwbad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yzz2v3bok"/><path class="c3y7nqned"/><path class="huqnwlvew"/><path class="hi72lwbad"/></g>`,
		"fallback": "streamline-cyber-color:reflect-copy-left",
	});
}

export default Component;
