import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wzlj-eb-w.css';
import '../../css/b/b-45hkb_r.css';
import '../../css/h/hcipdc97e.css';
import '../../css/j/j2j7__bqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wzlj-eb-w"/><path class="b-45hkb_r"/><path clip-rule="evenodd" class="hcipdc97e"/><path class="j2j7__bqi"/></g>`,
		"fallback": "healthicons:nutrition-outline-24px",
	});
}

export default Component;
