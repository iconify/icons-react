import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/c/cc531yb-f.css';
import '../../css/j/j3r1u6bwi.css';
import '../../css/l/l-rfgwb-j.css';
import '../../css/k/kxeauv6lv.css';
import '../../css/s/sbnzdzbbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="cc531yb-f"/><path class="j3r1u6bwi wm-shine"/><path class="l-rfgwb-j wm-k"/><path class="kxeauv6lv wm-a"/><path class="sbnzdzbbh wm-deco"/></g>`,
		"fallback": "withicons-kawaii:log-out",
	});
}

export default Component;
