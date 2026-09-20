import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gqxne-ocw.css';
import '../../css/o/o8yqkabnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gqxne-ocw"/><path class="o8yqkabnb"/></g>`,
		"fallback": "solar:revote-bold-duotone",
	});
}

export default Component;
