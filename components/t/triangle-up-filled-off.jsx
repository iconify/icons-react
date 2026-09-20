import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qr9jqsasa.css';
import '../../css/g/g6lti9bpf.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qr9jqsasa"/><path clip-rule="evenodd" class="g6lti9bpf"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:triangle-up-filled-off",
	});
}

export default Component;
