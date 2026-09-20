import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fa68aqb5j.css';
import '../../css/k/kh3_i28mv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fa68aqb5j"/><path class="kh3_i28mv"/></g>`,
		"fallback": "reicon:link-square",
	});
}

export default Component;
