import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyzqfc13x.css';
import '../../css/e/e_0e-zbty.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="zyzqfc13x"/><path class="e_0e-zbty"/>`,
		"fallback": "ion:watch",
	});
}

export default Component;
