import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o5grrub_r.css';
import '../../css/x/xzvurzb8a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="o5grrub_r"/><path class="xzvurzb8a"/></g>`,
		"fallback": "streamline:interface-arrows-diagonal-scroll-point-1-move-scroll",
	});
}

export default Component;
