import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckiq7ve7h.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckiq7ve7h"/>`,
		"fallback": "fa7-solid:user-plus",
	});
}

export default Component;
