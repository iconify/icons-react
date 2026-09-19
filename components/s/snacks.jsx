import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kco0rzb9e.css';
import '../../css/f/fyyae2cjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kco0rzb9e"/><path clip-rule="evenodd" class="fyyae2cjc"/></g>`,
		"fallback": "griddy-icons:snacks",
	});
}

export default Component;
