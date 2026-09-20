import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t69nwwbts.css';
import '../../css/d/dv8e4qb1r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t69nwwbts"/><path class="dv8e4qb1r"/>`,
		"fallback": "selfhst:tubetimeout",
	});
}

export default Component;
