import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2b-_zbky.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2b-_zbky"/>`,
		"fallback": "lsicon:operation-outline",
	});
}

export default Component;
