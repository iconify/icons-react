import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lj8ch5jba.css';
import '../../css/c/cypcp49qv.css';
import '../../css/z/z1deu_b7x.css';
import '../../css/t/tmxm_38fl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lj8ch5jba"/><path clip-rule="evenodd" class="cypcp49qv"/><path class="z1deu_b7x"/><path class="tmxm_38fl"/></g>`,
		"fallback": "streamline-sharp-color:ship-flat",
	});
}

export default Component;
