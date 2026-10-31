import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kpmc2p_8f.css';
import '../../css/r/rm2jdlnwc.css';
import '../../css/u/urlzan7ys.css';
import '../../css/q/q08kq17fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="kpmc2p_8f"/><path class="rm2jdlnwc wm-shine"/><path class="urlzan7ys"/><path class="q08kq17fp wm-deco"/></g>`,
		"fallback": "withicons-kawaii:pause",
	});
}

export default Component;
