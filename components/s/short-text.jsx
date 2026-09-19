import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2ux_fb-o.css';
import '../../css/y/y766n9b5x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2ux_fb-o"/><path class="y766n9b5x"/>`,
		"fallback": "cil:short-text",
	});
}

export default Component;
