import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww9l4w97m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww9l4w97m"/>`,
		"fallback": "carbon:temperature-inversion",
	});
}

export default Component;
