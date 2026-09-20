import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c479rxbrg.css';
import '../../css/h/huuajhmrh.css';
import '../../css/s/sicerrb4c.css';
import '../../css/d/dwe1rl4_v.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c479rxbrg"/><circle class="huuajhmrh"/><path class="sicerrb4c"/><path class="dwe1rl4_v"/>`,
		"fallback": "openmoji:unamused-face",
	});
}

export default Component;
