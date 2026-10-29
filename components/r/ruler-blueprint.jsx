import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yw3ll3bmk.css';
import '../../css/a/a38w6sbvh.css';
import '../../css/p/p6m5mlb1h.css';
import '../../css/o/oeaxk80gc.css';
import '../../css/r/rzoychbjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco yw3ll3bmk"/><path class="a38w6sbvh wm-deco"/><path class="p6m5mlb1h wm-deco"/><path class="oeaxk80gc wm-k"/><path class="rzoychbjy wm-a"/></g>`,
		"fallback": "withicons:ruler-blueprint",
	});
}

export default Component;
