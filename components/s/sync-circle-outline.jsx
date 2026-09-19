import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lsg5j7ibl.css';
import '../../css/c/c2legdcgb.css';
import '../../css/r/r0i4i9brz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lsg5j7ibl"/><path class="c2legdcgb"/><path class="r0i4i9brz"/>`,
		"fallback": "ion:sync-circle-outline",
	});
}

export default Component;
