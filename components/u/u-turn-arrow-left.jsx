import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tf_kryblx.css';
import '../../css/h/hweutsbxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tf_kryblx"/><path class="hweutsbxm"/></g>`,
		"fallback": "iconoir:u-turn-arrow-left",
	});
}

export default Component;
