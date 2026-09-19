import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/piz04983m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="piz04983m"/>`,
		"fallback": "bi:twitter",
	});
}

export default Component;
