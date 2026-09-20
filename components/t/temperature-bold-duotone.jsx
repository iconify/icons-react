import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r14jftois.css';
import '../../css/g/g77e5c62a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r14jftois"/><path class="g77e5c62a"/></g>`,
		"fallback": "solar:temperature-bold-duotone",
	});
}

export default Component;
