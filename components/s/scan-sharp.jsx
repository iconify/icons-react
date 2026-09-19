import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-bm76t0w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-bm76t0w"/>`,
		"fallback": "ion:scan-sharp",
	});
}

export default Component;
