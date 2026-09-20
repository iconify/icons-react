import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pruv_t01z.css';
import '../../css/z/z4rdnfdvz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pruv_t01z"/><path class="z4rdnfdvz"/></g>`,
		"fallback": "thesvg:mimiclaw",
	});
}

export default Component;
