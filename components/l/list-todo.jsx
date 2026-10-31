import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zrvc1yqae.css';
import '../../css/w/wt0-iuv_w.css';
import '../../css/b/b2_xccbks.css';
import '../../css/w/w7o9gp24m.css';
import '../../css/i/iygtibqrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="zrvc1yqae"/><path class="wm-shine wt0-iuv_w"/><path class="b2_xccbks wm-k"/><path class="w7o9gp24m wm-a"/><path class="iygtibqrr wm-deco"/></g>`,
		"fallback": "withicons-kawaii:list-todo",
	});
}

export default Component;
