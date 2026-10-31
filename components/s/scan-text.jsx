import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a_taffbgq.css';
import '../../css/g/gw_wn-jpu.css';
import '../../css/v/vum19db3u.css';
import '../../css/n/nfyqolnsy.css';
import '../../css/q/q-tlybr1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="a_taffbgq wm-shadow"/><path class="gw_wn-jpu"/><path class="vum19db3u"/><path class="nfyqolnsy"/><path class="q-tlybr1v"/></g>`,
		"fallback": "withicons-retro:scan-text",
	});
}

export default Component;
