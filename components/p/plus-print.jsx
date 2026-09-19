import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l546r6byy.css';
import '../../css/d/dqrzf1bnz.css';
import '../../css/a/avr8ui1vm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l546r6byy"/><path class="dqrzf1bnz"/><path class="avr8ui1vm"/></g>`,
		"fallback": "pepicons:plus-print",
	});
}

export default Component;
