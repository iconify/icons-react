import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xwg129jku.css';
import '../../css/h/hcvco8bna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary xwg129jku"/><path class="hcvco8bna primary"/></g>`,
		"fallback": "iconaut:target-arrow-duotone",
	});
}

export default Component;
