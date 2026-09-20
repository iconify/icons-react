import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s19aowben.css';
import '../../css/f/f6p-2g58b.css';
import '../../css/q/q9lv46bbv.css';
import '../../css/l/l2mcogbbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s19aowben"/><path class="f6p-2g58b"/><path class="q9lv46bbv"/><path class="l2mcogbbt"/></g>`,
		"fallback": "solar:list-cross-minimalistic-line-duotone",
	});
}

export default Component;
