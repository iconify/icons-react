import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oq367kv2n.css';
import '../../css/q/q9e-uvxvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oq367kv2n"/><path clip-rule="evenodd" class="q9e-uvxvv"/>`,
		"fallback": "mingcute:mailbox-fill",
	});
}

export default Component;
