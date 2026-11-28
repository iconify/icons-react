import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w-q-3ub9b.css';
import '../../css/v/vmhukgb4r.css';
import '../../css/q/q470_h_wr.css';
import '../../css/o/ogbs5rbxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="w-q-3ub9b"/><path class="vmhukgb4r"/><path class="q470_h_wr"/><path class="ogbs5rbxm"/></g>`,
		"fallback": "iconaut:snake",
	});
}

export default Component;
