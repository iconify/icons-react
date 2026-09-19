import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8nofnwha.css';
import '../../css/v/v1eiv24xr.css';
import '../../css/p/p7bg0ij5t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h8nofnwha"/><path class="v1eiv24xr"/><path class="p7bg0ij5t"/></g>`,
		"fallback": "glyphs:sort-amount-down-bold",
	});
}

export default Component;
