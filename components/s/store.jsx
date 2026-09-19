import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drlbf6fns.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drlbf6fns"/>`,
		"fallback": "carbon:store",
	});
}

export default Component;
