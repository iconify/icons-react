import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu3wmc3lc.css';
import '../../css/k/k6ez9jbqr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zu3wmc3lc"/><path class="k6ez9jbqr"/>`,
		"fallback": "ion:ios-notifications",
	});
}

export default Component;
