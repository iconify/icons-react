import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw2z57h3m.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw2z57h3m"/>`,
		"fallback": "fa7-brands:unsplash",
	});
}

export default Component;
