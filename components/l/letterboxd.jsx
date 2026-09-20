import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e76parb_w.css';
import '../../css/q/qqt6mfb8z.css';
import '../../css/d/dypwk2lxc.css';
import '../../css/r/rkf5-q5qb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e76parb_w"/><path class="qqt6mfb8z"/><path class="dypwk2lxc"/><path class="rkf5-q5qb"/>`,
		"fallback": "selfhst:letterboxd",
	});
}

export default Component;
