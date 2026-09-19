import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcni0tkfb.css';

const viewBox = {"width":384,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcni0tkfb"/>`,
		"fallback": "zmdi:pin-help",
	});
}

export default Component;
