import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw2fmneoq.css';

const viewBox = {"width":1280,"height":1472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw2fmneoq"/>`,
		"fallback": "vs:user-waiter-female",
	});
}

export default Component;
