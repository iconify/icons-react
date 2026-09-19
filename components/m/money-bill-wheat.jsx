import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei56k7b1w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ei56k7b1w"/>`,
		"fallback": "fa6-solid:money-bill-wheat",
	});
}

export default Component;
