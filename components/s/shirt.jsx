import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/x/xjdkxr0_f.css';
import '../../css/u/uexu3ab2l.css';
import '../../css/u/unn-murzu.css';
import '../../css/d/d9q7phbbl.css';
import '../../css/w/w_fji5bsw.css';
import '../../css/v/vonb3q4ol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wm-shadow xjdkxr0_f"/><path class="uexu3ab2l"/><path class="unn-murzu"/><path class="d9q7phbbl"/><path class="w_fji5bsw wm-shine"/><path class="vonb3q4ol wm-deco"/></g>`,
		"fallback": "withicons-sticker:shirt",
	});
}

export default Component;
