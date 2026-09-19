import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uycdujbdt.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uycdujbdt"/>`,
		"fallback": "vs:r-square",
	});
}

export default Component;
