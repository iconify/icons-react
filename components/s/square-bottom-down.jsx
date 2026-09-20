import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lgngptbte.css';
import '../../css/k/kc3ls-ols.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lgngptbte"/><path class="kc3ls-ols"/></g>`,
		"fallback": "reicon:square-bottom-down",
	});
}

export default Component;
