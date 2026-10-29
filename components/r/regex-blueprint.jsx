import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wrkkogj0z.css';
import '../../css/o/oil9inbcq.css';
import '../../css/r/roxwstbzh.css';
import '../../css/u/u1p6qnb1w.css';
import '../../css/x/x15ulwren.css';
import '../../css/z/z6ivbs5_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco wrkkogj0z"/><path class="oil9inbcq wm-deco"/><path class="roxwstbzh wm-deco"/><path class="u1p6qnb1w wm-k"/><path class="wm-a x15ulwren"/><path class="wm-k z6ivbs5_t"/></g>`,
		"fallback": "withicons:regex-blueprint",
	});
}

export default Component;
