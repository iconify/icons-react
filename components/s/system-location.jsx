import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4tx7vblx.css';
import '../../css/w/wlghgvvky.css';
import '../../css/k/kx5ekhj3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g4tx7vblx"/><path class="wlghgvvky"/><path class="kx5ekhj3l"/></g>`,
		"fallback": "tdesign:system-location",
	});
}

export default Component;
