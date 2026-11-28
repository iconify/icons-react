import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kaowuknjg.css';
import '../../css/t/tw3edbbnp.css';
import '../../css/x/xd4r41bmd.css';
import '../../css/z/zhhiysb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kaowuknjg"/><path class="tw3edbbnp"/><path class="xd4r41bmd"/><path class="zhhiysb_d"/></g>`,
		"fallback": "iconaut:layout-dashboard",
	});
}

export default Component;
