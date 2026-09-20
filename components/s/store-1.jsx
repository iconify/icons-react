import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gu-geabpn.css';
import '../../css/j/jyzebbb8n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="gu-geabpn"/><path class="jyzebbb8n"/></g>`,
		"fallback": "streamline:store-1",
	});
}

export default Component;
