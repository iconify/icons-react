import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/ase33vgvd.css';
import '../../css/r/rcx9p_0iw.css';
import '../../css/f/f_6ibcb-b.css';
import '../../css/u/ui2tzkbto.css';
import '../../css/j/jdvkjybfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ase33vgvd wm-shadow"/><path class="rcx9p_0iw"/><path class="f_6ibcb-b"/><path class="ui2tzkbto"/><path class="jdvkjybfw"/></g>`,
		"fallback": "withicons-retro:toggle",
	});
}

export default Component;
