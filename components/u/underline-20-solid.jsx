import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ig8s2roze.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ig8s2roze"/>`,
		"fallback": "heroicons:underline-20-solid",
	});
}

export default Component;
