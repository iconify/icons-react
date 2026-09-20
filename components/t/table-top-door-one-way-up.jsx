import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe5x2sqyg.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe5x2sqyg"/>`,
		"fallback": "memory:table-top-door-one-way-up",
	});
}

export default Component;
