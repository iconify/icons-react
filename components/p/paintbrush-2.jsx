import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x350pgbgj.css';
import '../../css/m/mh3hx2bez.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="x350pgbgj"/><path class="mh3hx2bez"/></g>`,
		"fallback": "streamline-flex:paintbrush-2",
	});
}

export default Component;
