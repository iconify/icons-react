import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odg8d7b5z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odg8d7b5z"/>`,
		"fallback": "ion:musical-notes",
	});
}

export default Component;
