import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s752dxbta.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s752dxbta"/>`,
		"fallback": "subway:rectangular",
	});
}

export default Component;
