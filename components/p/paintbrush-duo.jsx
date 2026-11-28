import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byk3aib_c.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u39c_yipz.css';
import '../../css/t/t2sswdyyp.css';
import '../../css/x/xoiwp6hbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byk3aib_c secondary"/><g class="dt0cm9dhy primary"><path class="u39c_yipz"/><path class="t2sswdyyp"/><path class="xoiwp6hbu"/></g>`,
		"fallback": "iconaut:paintbrush-duo",
	});
}

export default Component;
