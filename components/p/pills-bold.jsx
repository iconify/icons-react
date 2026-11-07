import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-7ackjni.css';
import '../../css/h/h4a5d8u6i.css';
import '../../css/y/y-8n_fb5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-7ackjni"/><path class="h4a5d8u6i"/><path clip-rule="evenodd" class="y-8n_fb5o"/>`,
		"fallback": "solar:pills-bold",
	});
}

export default Component;
