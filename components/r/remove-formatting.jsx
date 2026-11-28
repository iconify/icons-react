import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kohggmbfj.css';
import '../../css/w/wwn5kybby.css';
import '../../css/b/bd8q_6bmk.css';
import '../../css/j/jj_5azneh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kohggmbfj"/><path class="wwn5kybby"/><path class="bd8q_6bmk"/><path class="jj_5azneh"/></g>`,
		"fallback": "iconaut:remove-formatting",
	});
}

export default Component;
