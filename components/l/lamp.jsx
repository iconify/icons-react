import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/ds0acab3w.css';
import '../../css/z/zqzbbvucj.css';
import '../../css/k/k8lgpwkyg.css';
import '../../css/m/m2ivih9wp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ds0acab3w"/><path class="zqzbbvucj"/><path class="k8lgpwkyg"/><path class="m2ivih9wp"/></g>`,
		"fallback": "iconaut:lamp",
	});
}

export default Component;
