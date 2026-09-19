import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gagxybbiw.css';
import '../../css/h/ht3_8nbfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gagxybbiw"/><path class="ht3_8nbfg"/></g>`,
		"fallback": "hugeicons:square-arrow-out-down-right",
	});
}

export default Component;
