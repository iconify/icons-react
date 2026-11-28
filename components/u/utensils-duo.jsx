import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4-40cbdh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j9_-vv2ay.css';
import '../../css/b/b50ewccat.css';
import '../../css/u/u97t07qeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary z4-40cbdh"/><g class="dt0cm9dhy primary"><path class="j9_-vv2ay"/><path class="b50ewccat"/><path class="u97t07qeu"/></g>`,
		"fallback": "iconaut:utensils-duo",
	});
}

export default Component;
