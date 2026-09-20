import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x86x4fbpq.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x86x4fbpq"/>`,
		"fallback": "memory:torch",
	});
}

export default Component;
