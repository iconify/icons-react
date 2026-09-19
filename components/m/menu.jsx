import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd6vyq9rg.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd6vyq9rg"/>`,
		"fallback": "zmdi:menu",
	});
}

export default Component;
