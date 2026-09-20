import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o5grrub_r.css';
import '../../css/h/h5x1qf75q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="o5grrub_r"/><path class="h5x1qf75q"/></g>`,
		"fallback": "streamline:interface-arrows-diagonal-scroll-point-2-move-scroll",
	});
}

export default Component;
