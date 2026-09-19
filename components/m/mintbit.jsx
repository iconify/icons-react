import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjlu84bvs.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjlu84bvs"/>`,
		"fallback": "fa7-brands:mintbit",
	});
}

export default Component;
