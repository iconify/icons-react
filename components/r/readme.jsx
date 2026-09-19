import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az-hr7b_r.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az-hr7b_r"/>`,
		"fallback": "fa6-brands:readme",
	});
}

export default Component;
