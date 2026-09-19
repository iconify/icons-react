import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-50j0_4f.css';
import '../../css/u/uj3418bvh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-50j0_4f"/><path class="uj3418bvh"/>`,
		"fallback": "carbon:task-remove",
	});
}

export default Component;
