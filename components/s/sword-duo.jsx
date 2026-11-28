import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5o-vvboz.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qz58nqbby.css';
import '../../css/t/tx1xilbkt.css';
import '../../css/u/u0nn1qdyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5o-vvboz secondary"/><g class="dt0cm9dhy primary"><path class="qz58nqbby"/><path class="tx1xilbkt"/><path class="u0nn1qdyx"/></g>`,
		"fallback": "iconaut:sword-duo",
	});
}

export default Component;
