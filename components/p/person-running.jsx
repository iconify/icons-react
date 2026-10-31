import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/n/nbj9h_znk.css';
import '../../css/x/xa7_8hb6p.css';
import '../../css/y/y183ipbpf.css';
import '../../css/v/vjc0jibin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="nbj9h_znk"/><path class="wm-k xa7_8hb6p"/><path class="wm-a y183ipbpf"/><path class="vjc0jibin wm-deco"/></g>`,
		"fallback": "withicons-kawaii:person-running",
	});
}

export default Component;
