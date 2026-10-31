import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/c/cq79q9b6z.css';
import '../../css/f/flda1zb7r.css';
import '../../css/h/hbshrxb0p.css';
import '../../css/k/ky5cbpbbs.css';
import '../../css/p/peo8dcc3o.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="cq79q9b6z"/><path class="flda1zb7r"/><path class="hbshrxb0p wm-shine"/><path class="ky5cbpbbs wm-k"/><path class="peo8dcc3o wm-a"/><path class="i49wp7b0m wm-deco"/></g>`,
		"fallback": "withicons-kawaii:pen-tool",
	});
}

export default Component;
