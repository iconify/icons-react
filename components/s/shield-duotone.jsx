import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qectn2b4w.css';
import '../../css/i/i5rzi5b_y.css';
import '../../css/k/kc6w967lp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qectn2b4w"/><path class="i5rzi5b_y"/><path class="kc6w967lp"/></g>`,
		"fallback": "reicon:shield-duotone",
	});
}

export default Component;
