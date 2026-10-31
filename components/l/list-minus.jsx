import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pgqql6bua.css';
import '../../css/n/np49-gpai.css';
import '../../css/z/zhh4qibkx.css';
import '../../css/t/trrkjbtjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGH20CIIwF" cx="7.56" cy="8.02" r="22.22" gradientUnits="userSpaceOnUse"><stop offset="0" class="pgqql6bua"/><stop offset=".3" class="pgqql6bua"/><stop offset="1" class="np49-gpai"/></radialGradient></defs><path fill="url(#SVGH20CIIwF)" class="wm-k zhh4qibkx"/><path class="trrkjbtjk wm-s"/></g>`,
		"fallback": "withicons-rangoli:list-minus",
	});
}

export default Component;
