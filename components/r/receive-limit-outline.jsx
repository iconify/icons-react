import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/ohkjqsbos.css';
import '../../css/t/tl2fuobsj.css';
import '../../css/t/t01m3nb-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="ohkjqsbos"/><circle class="tl2fuobsj"/><path class="t01m3nb-k"/></g>`,
		"fallback": "bitcoin-icons:receive-limit-outline",
	});
}

export default Component;
