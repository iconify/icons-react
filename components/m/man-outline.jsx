import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftykwmc2g.css';
import '../../css/v/vzzdp4b2g.css';
import '../../css/b/bnuokeb_v.css';
import '../../css/o/o0lqhvmmi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftykwmc2g"/><path class="vzzdp4b2g"/><path class="bnuokeb_v"/><circle class="o0lqhvmmi"/>`,
		"fallback": "ion:man-outline",
	});
}

export default Component;
