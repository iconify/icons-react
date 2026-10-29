import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/srziv7glx.css';
import '../../css/c/cojk3quut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="srziv7glx"/><path class="cojk3quut wm-a"/></g>`,
		"fallback": "withicons:red-lantern",
	});
}

export default Component;
