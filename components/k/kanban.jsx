import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uacp7pu3u.css';
import '../../css/d/db-0dmlok.css';
import '../../css/x/x7vrpjlro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="uacp7pu3u"/><path class="db-0dmlok"/><path class="x7vrpjlro"/></g>`,
		"fallback": "iconaut:kanban",
	});
}

export default Component;
