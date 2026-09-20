import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu9465z8x.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu9465z8x"/>`,
		"fallback": "memory:pickaxe",
	});
}

export default Component;
