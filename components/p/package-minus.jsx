import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/in_hfigss.css';
import '../../css/w/w-4-qtbwu.css';
import '../../css/c/cgapqzb1g.css';
import '../../css/q/q2tftac5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="in_hfigss"/><path class="w-4-qtbwu"/><path class="cgapqzb1g"/><path class="q2tftac5m"/></g>`,
		"fallback": "iconaut:package-minus",
	});
}

export default Component;
