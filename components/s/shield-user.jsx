import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/iklt5abmc.css';
import '../../css/j/jb4b8-pga.css';
import '../../css/w/w1tkcrbrj.css';
import '../../css/o/ouw5kpbrn.css';
import '../../css/q/q53cmxb6m.css';
import '../../css/g/ghcq3vt4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="iklt5abmc"/><path class="jb4b8-pga"/><path class="w1tkcrbrj wm-shine"/><path class="ouw5kpbrn wm-k"/><path class="q53cmxb6m wm-a"/><path class="ghcq3vt4r wm-deco"/></g>`,
		"fallback": "withicons-kawaii:shield-user",
	});
}

export default Component;
