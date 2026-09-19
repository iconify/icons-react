import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyikxh0ff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pyikxh0ff"/>`,
		"fallback": "bitcoin-icons:key-outline",
	});
}

export default Component;
