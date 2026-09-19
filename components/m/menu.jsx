import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9c_-ib7x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9c_-ib7x"/>`,
		"fallback": "dashicons:menu",
	});
}

export default Component;
