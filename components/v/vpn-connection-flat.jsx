import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vth8n5b1g.css';
import '../../css/q/qati1bwgv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vth8n5b1g"/><path class="qati1bwgv"/></g>`,
		"fallback": "streamline-color:vpn-connection-flat",
	});
}

export default Component;
