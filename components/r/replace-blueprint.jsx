import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/x8undcbyj.css';
import '../../css/f/fm1mx9bkd.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/r/rhvi5vbnt.css';
import '../../css/z/zltg-z8yh.css';
import '../../css/x/xe04_zb_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco x8undcbyj"/><path class="fm1mx9bkd wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="rhvi5vbnt wm-k"/><path class="wm-a zltg-z8yh"/><path class="wm-a xe04_zb_o"/></g>`,
		"fallback": "withicons:replace-blueprint",
	});
}

export default Component;
