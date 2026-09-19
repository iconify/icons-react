import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lyb2843jx.css';
import '../../css/j/js6hc8bae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lyb2843jx"/><path class="js6hc8bae"/></g>`,
		"fallback": "griddy-icons:temperature-cold",
	});
}

export default Component;
