import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tja7qfb6u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tja7qfb6u"/>`,
		"fallback": "lsicon:number-outline",
	});
}

export default Component;
