import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zu1ncjbry.css';
import '../../css/i/i-hd03k2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zu1ncjbry"/><path class="i-hd03k2z"/></g>`,
		"fallback": "ginetex:iron-at-low-temperature",
	});
}

export default Component;
