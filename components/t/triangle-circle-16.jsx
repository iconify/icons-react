import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alg-2d_nm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alg-2d_nm"/>`,
		"fallback": "octicon:triangle-circle-16",
	});
}

export default Component;
