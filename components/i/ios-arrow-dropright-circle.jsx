import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsd1mab5j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsd1mab5j"/>`,
		"fallback": "ion:ios-arrow-dropright-circle",
	});
}

export default Component;
