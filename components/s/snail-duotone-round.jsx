import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kd2_tebys.css';
import '../../css/z/z39kxgb4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kd2_tebys"/><path class="z39kxgb4s"/></g>`,
		"fallback": "coolicons:snail-duotone-round",
	});
}

export default Component;
