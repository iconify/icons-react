import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qo-b4ibmq.css';
import '../../css/y/y27beivkv.css';
import '../../css/n/nq-j1qtfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qo-b4ibmq"/><path class="wm-a y27beivkv"/><path class="nq-j1qtfz wm-a"/></g>`,
		"fallback": "withicons:save-all",
	});
}

export default Component;
