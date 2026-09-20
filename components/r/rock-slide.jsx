import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v_gp4bciv.css';
import '../../css/z/zv-7dzbuy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v_gp4bciv"/><path class="zv-7dzbuy"/></g>`,
		"fallback": "streamline-color:rock-slide",
	});
}

export default Component;
