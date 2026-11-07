import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo3mbbcpz.css';
import '../../css/z/zv6teybjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo3mbbcpz"/><path class="zv6teybjb"/>`,
		"fallback": "solar:revote-outline",
	});
}

export default Component;
