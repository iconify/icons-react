import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jdokwnbqk.css';
import '../../css/b/bymrjbwvt.css';
import '../../css/w/wp8eyggrp.css';
import '../../css/b/ba_pjzfdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jdokwnbqk"/><path class="bymrjbwvt wm-a"/><path class="wp8eyggrp"/><path class="ba_pjzfdu wm-a"/></g>`,
		"fallback": "withicons:school",
	});
}

export default Component;
