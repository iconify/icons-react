import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/ttx7znbdw.css';
import '../../css/b/bgw7w1kpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ttx7znbdw"/><path class="bgw7w1kpf"/></g>`,
		"fallback": "reicon:mouse2-duotone",
	});
}

export default Component;
