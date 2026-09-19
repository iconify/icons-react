import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ux94p3bkn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ux94p3bkn"/>`,
		"fallback": "cil:link-broken",
	});
}

export default Component;
