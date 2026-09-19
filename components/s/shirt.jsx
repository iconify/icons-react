import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itzqobc7g.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itzqobc7g"/>`,
		"fallback": "fa6-solid:shirt",
	});
}

export default Component;
