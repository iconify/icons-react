import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixdm9acjc.css';
import '../../css/i/irl9z8uwq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixdm9acjc"/><path class="irl9z8uwq"/>`,
		"fallback": "ion:social-css3-outline",
	});
}

export default Component;
