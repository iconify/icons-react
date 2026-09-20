import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/drcsyqcaz.css';
import '../../css/i/ig-zxgbob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="drcsyqcaz"/><path class="ig-zxgbob"/></g>`,
		"fallback": "nrk:settings-solid-expressive",
	});
}

export default Component;
