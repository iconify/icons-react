import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etphgj1if.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etphgj1if"/>`,
		"fallback": "pinhead:tipi-campsite-with-baht",
	});
}

export default Component;
