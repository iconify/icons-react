import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zla9v-bkh.css';
import '../../css/o/oclwabc9g.css';
import '../../css/t/twvnaibgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zla9v-bkh"/><path class="oclwabc9g"/><path class="twvnaibgk"/></g>`,
		"fallback": "solar:trash-bin-minimalistic-2-outline",
	});
}

export default Component;
