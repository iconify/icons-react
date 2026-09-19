import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksbvw3bpr.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksbvw3bpr"/>`,
		"fallback": "el:volume-up",
	});
}

export default Component;
