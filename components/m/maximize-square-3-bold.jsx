import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r9eucsbka.css';
import '../../css/m/mlyzq9bmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r9eucsbka"/><path clip-rule="evenodd" class="mlyzq9bmr"/></g>`,
		"fallback": "solar:maximize-square-3-bold",
	});
}

export default Component;
