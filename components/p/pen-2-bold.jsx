import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uiffuvbfp.css';
import '../../css/y/ya4gq6bza.css';
import '../../css/j/jyju9u0xf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uiffuvbfp"/><path class="ya4gq6bza"/><path class="jyju9u0xf"/></g>`,
		"fallback": "solar:pen-2-bold",
	});
}

export default Component;
