import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju0i9lbqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ju0i9lbqs"/>`,
		"fallback": "griddy-icons:number-0",
	});
}

export default Component;
