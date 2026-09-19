import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb0p2xp2m.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb0p2xp2m"/>`,
		"fallback": "fa-brands:joget",
	});
}

export default Component;
