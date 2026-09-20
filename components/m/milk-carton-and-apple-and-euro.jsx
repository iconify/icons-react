import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5b2ksb_w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5b2ksb_w"/>`,
		"fallback": "pinhead:milk-carton-and-apple-and-euro",
	});
}

export default Component;
