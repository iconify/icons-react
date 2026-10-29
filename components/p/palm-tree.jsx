import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mm2szcbmu.css';
import '../../css/x/x8-a5_dkh.css';
import '../../css/q/qcfnobbty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mm2szcbmu"/><path class="x8-a5_dkh"/><path class="qcfnobbty wm-a"/></g>`,
		"fallback": "withicons:palm-tree",
	});
}

export default Component;
