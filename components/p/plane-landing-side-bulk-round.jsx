import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rd1da69_r.css';
import '../../css/f/fjmgsib9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rd1da69_r"/><path class="fjmgsib9m"/></g>`,
		"fallback": "coolicons:plane-landing-side-bulk-round",
	});
}

export default Component;
