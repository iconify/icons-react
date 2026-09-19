import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb6ttobwl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb6ttobwl"/>`,
		"fallback": "ion:social-yen-outline",
	});
}

export default Component;
