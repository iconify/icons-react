import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a_o4ambzo.css';
import '../../css/c/c_63bjjtw.css';
import '../../css/d/d6j4cobbq.css';
import '../../css/j/j6z-lbb7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a_o4ambzo"/><path class="c_63bjjtw"/><path class="d6j4cobbq"/><path class="j6z-lbb7e"/></g>`,
		"fallback": "iconaut:tablets",
	});
}

export default Component;
