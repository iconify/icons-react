import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvzc1fbtk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvzc1fbtk"/>`,
		"fallback": "ion:skip-forward",
	});
}

export default Component;
