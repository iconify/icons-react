import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqynb9bxe.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqynb9bxe"/>`,
		"fallback": "fa7-brands:superpowers",
	});
}

export default Component;
