import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idvppfb9u.css';

const viewBox = {"width":1760,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idvppfb9u"/>`,
		"fallback": "fa:sort-amount-asc",
	});
}

export default Component;
