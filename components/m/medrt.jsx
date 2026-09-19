import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clyii8_rv.css';

const viewBox = {"width":544,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clyii8_rv"/>`,
		"fallback": "fa-brands:medrt",
	});
}

export default Component;
