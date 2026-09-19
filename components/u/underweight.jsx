import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/atr1jk6xp.css';
import '../../css/c/cp84uccue.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="atr1jk6xp"/><path clip-rule="evenodd" class="cp84uccue"/></g>`,
		"fallback": "healthicons:underweight",
	});
}

export default Component;
