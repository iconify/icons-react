import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sn80g5gup.css';
import '../../css/k/ko4_5-bkg.css';
import '../../css/b/bxjv56brc.css';
import '../../css/j/jauy76b2j.css';
import '../../css/t/t-o40t_zv.css';
import '../../css/m/myxn6pb-v.css';
import '../../css/w/wzamkyg-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="sn80g5gup wm-deco"/><path class="ko4_5-bkg wm-deco"/><path class="bxjv56brc wm-deco"/><path class="jauy76b2j wm-k"/><path class="t-o40t_zv wm-a"/><path class="myxn6pb-v wm-k"/><path class="wm-a wzamkyg-j"/></g>`,
		"fallback": "withicons:upload-blueprint",
	});
}

export default Component;
