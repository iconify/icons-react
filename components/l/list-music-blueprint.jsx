import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/u-tt_llmn.css';
import '../../css/a/aj4i3qbqb.css';
import '../../css/u/u9lvkbbnl.css';
import '../../css/t/t3_hcgb0b.css';
import '../../css/i/im5d1vkug.css';
import '../../css/u/u59d_8bwi.css';
import '../../css/o/o6eve4bwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="u-tt_llmn wm-deco"/><path class="aj4i3qbqb wm-deco"/><path class="u9lvkbbnl wm-deco"/><path class="t3_hcgb0b wm-k"/><path class="im5d1vkug wm-a"/><path class="u59d_8bwi wm-k"/><path class="o6eve4bwf wm-a"/></g>`,
		"fallback": "withicons:list-music-blueprint",
	});
}

export default Component;
