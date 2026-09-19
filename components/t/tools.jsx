import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqi1k2b_m.css';

const viewBox = {"width":31.87,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqi1k2b_m"/>`,
		"fallback": "et:tools",
	});
}

export default Component;
