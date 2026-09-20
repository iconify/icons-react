import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q9fs4ugtp.css';
import '../../css/d/d28c2vb-s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="q9fs4ugtp"/><path class="d28c2vb-s"/></g>`,
		"fallback": "streamline:interface-home-4-door-entrnace-map",
	});
}

export default Component;
