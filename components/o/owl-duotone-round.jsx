import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zplvtebpz.css';
import '../../css/f/frk8_ob9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zplvtebpz"/><path class="frk8_ob9m"/></g>`,
		"fallback": "coolicons:owl-duotone-round",
	});
}

export default Component;
