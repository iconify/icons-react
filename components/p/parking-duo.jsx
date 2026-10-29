import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zdv2jph6r.css';
import '../../css/m/m6ku3cbcx.css';
import '../../css/l/lg-8n1num.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="zdv2jph6r"/><path class="m6ku3cbcx wm-a"/><path class="lg-8n1num"/></g>`,
		"fallback": "withicons:parking-duo",
	});
}

export default Component;
