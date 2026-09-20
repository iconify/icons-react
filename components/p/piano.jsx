import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvxj2_1-a.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvxj2_1-a"/>`,
		"fallback": "picon:piano",
	});
}

export default Component;
