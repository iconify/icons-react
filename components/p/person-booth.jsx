import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki_r4_mpr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ki_r4_mpr"/>`,
		"fallback": "fa7-solid:person-booth",
	});
}

export default Component;
