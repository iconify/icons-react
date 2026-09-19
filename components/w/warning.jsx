import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ice71tbrt.css';
import '../../css/w/wl50x4lxr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ice71tbrt"/><path class="wl50x4lxr"/>`,
		"fallback": "cil:warning",
	});
}

export default Component;
