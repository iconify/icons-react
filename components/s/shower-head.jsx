import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w439gnkso.css';
import '../../css/a/afxiy6lsc.css';
import '../../css/f/fmtboebos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="w439gnkso wm-a"/><path class="afxiy6lsc"/><path class="fmtboebos wm-s"/></g>`,
		"fallback": "withicons:shower-head",
	});
}

export default Component;
