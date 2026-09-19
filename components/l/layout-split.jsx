import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3zwszm_m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3zwszm_m"/>`,
		"fallback": "bi:layout-split",
	});
}

export default Component;
