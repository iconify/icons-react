import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bviy_rbqs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bviy_rbqs"/>`,
		"fallback": "ion:social-linkedin",
	});
}

export default Component;
