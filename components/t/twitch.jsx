import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i_-pfjb0d.css';
import '../../css/o/oe9vz2-2r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i_-pfjb0d"/><path class="oe9vz2-2r"/></g>`,
		"fallback": "bi:twitch",
	});
}

export default Component;
