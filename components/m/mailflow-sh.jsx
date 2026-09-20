import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4t-70uyr.css';
import '../../css/v/vfekuobce.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4t-70uyr"/><path class="vfekuobce"/>`,
		"fallback": "selfhst:mailflow-sh",
	});
}

export default Component;
