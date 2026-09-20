import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2ixqfx6t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2ixqfx6t"/>`,
		"fallback": "uiw:right-square",
	});
}

export default Component;
