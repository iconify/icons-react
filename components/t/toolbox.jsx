import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fdqlhjbof.css';
import '../../css/m/mpqzm5b1d.css';

const viewBox = {"width":42,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fdqlhjbof"/><path class="mpqzm5b1d"/></g>`,
		"fallback": "et:toolbox",
	});
}

export default Component;
