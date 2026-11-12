import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e634y07gb.css';
import '../../css/w/wl3arebmb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e634y07gb"/><path class="wl3arebmb"/>`,
		"fallback": "selfhst:markstack-dark",
	});
}

export default Component;
