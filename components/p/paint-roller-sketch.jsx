import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yqn6_6bty.css';
import '../../css/q/qui8oyv3s.css';
import '../../css/l/l0uolabhl.css';
import '../../css/u/uv0egcb8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="yqn6_6bty"/><path class="qui8oyv3s wm-a"/><path class="l0uolabhl wm-k"/><path class="uv0egcb8v wm-a"/></g>`,
		"fallback": "withicons:paint-roller-sketch",
	});
}

export default Component;
