import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/yblbt0bdi.css';
import '../../css/v/vq2-3he1r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="yblbt0bdi"/><path class="vq2-3he1r"/></g>`,
		"fallback": "streamline:interface-arrows-button-right-duoble-arrow-arrows-double-right",
	});
}

export default Component;
