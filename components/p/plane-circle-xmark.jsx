import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kefc23bjx.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kefc23bjx"/>`,
		"fallback": "fa6-solid:plane-circle-xmark",
	});
}

export default Component;
