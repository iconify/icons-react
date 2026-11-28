import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ul_x5k6ap.css';
import '../../css/y/yo6vzy1cv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary ul_x5k6ap"/><path class="primary yo6vzy1cv"/></g>`,
		"fallback": "iconaut:paragraph-spacing-duotone",
	});
}

export default Component;
