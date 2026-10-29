import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bunq_pbyx.css';
import '../../css/k/ksdsltdkn.css';
import '../../css/g/g8ehjj7yy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bunq_pbyx"/><path class="ksdsltdkn wm-a"/><path class="g8ehjj7yy"/></g>`,
		"fallback": "withicons:server-duo",
	});
}

export default Component;
