import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/b210xtvup.css';
import '../../css/q/qoeh6jblo.css';
import '../../css/m/m04lsjj3o.css';
import '../../css/j/j8f31cbij.css';
import '../../css/v/vibn9db2x.css';
import '../../css/s/sloj1fjmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="b210xtvup wm-shadow"/><path class="qoeh6jblo"/><path class="m04lsjj3o"/><path class="j8f31cbij"/><path class="vibn9db2x wm-shine"/><path class="sloj1fjmk wm-deco"/></g>`,
		"fallback": "withicons-sticker:layout-dashboard",
	});
}

export default Component;
