import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/d/dgqk68f6h.css';
import '../../css/g/g44mj7bdx.css';
import '../../css/q/q513sfbjt.css';
import '../../css/g/g3xil_8ax.css';
import '../../css/v/vclm0qzbv.css';
import '../../css/t/t8d_nmkac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="dgqk68f6h wm-shadow"/><path class="g44mj7bdx"/><path class="q513sfbjt"/><path class="g3xil_8ax"/><path class="vclm0qzbv wm-shine"/><path class="t8d_nmkac wm-deco"/></g>`,
		"fallback": "withicons-sticker:message-circle-heart",
	});
}

export default Component;
