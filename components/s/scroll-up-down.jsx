import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkihevraw.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkihevraw"/>`,
		"fallback": "fluent-mdl2:scroll-up-down",
	});
}

export default Component;
