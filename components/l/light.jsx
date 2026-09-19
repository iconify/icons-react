import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djj8e4c7u.css';

const viewBox = {"width":688,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djj8e4c7u"/>`,
		"fallback": "ls:light",
	});
}

export default Component;
