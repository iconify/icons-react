import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ma39zmb0k.css';

const viewBox = {"width":452,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ma39zmb0k"/>`,
		"fallback": "file-icons:shopify",
	});
}

export default Component;
