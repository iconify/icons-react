import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-yry3tfi.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-yry3tfi"/>`,
		"fallback": "fa-solid:share-alt-square",
	});
}

export default Component;
