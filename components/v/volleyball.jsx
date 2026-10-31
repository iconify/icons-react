import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/j/jbc13cctw.css';
import '../../css/v/v4bqz7bvx.css';
import '../../css/y/yw4fz_b6b.css';
import '../../css/j/jyhr50b9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="jbc13cctw"/><path class="v4bqz7bvx wm-shine"/><path class="wm-k yw4fz_b6b"/><path class="jyhr50b9u wm-a"/></g>`,
		"fallback": "withicons-kawaii:volleyball",
	});
}

export default Component;
