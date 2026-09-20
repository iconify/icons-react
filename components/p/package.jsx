import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/po8tibbgb.css';
import '../../css/v/vc5g9hfhy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="po8tibbgb"/><path clip-rule="evenodd" class="vc5g9hfhy"/></g>`,
		"fallback": "reicon:package",
	});
}

export default Component;
