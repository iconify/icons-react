import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qm6u1bg0l.css';
import '../../css/x/xct7nzwyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qm6u1bg0l"/><path class="xct7nzwyh"/></g>`,
		"fallback": "lets-icons:knife-light",
	});
}

export default Component;
