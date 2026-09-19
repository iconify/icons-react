import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmi3i5bvf.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmi3i5bvf"/>`,
		"fallback": "fa6-brands:steam",
	});
}

export default Component;
