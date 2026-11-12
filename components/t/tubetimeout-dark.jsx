import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4g3hccck.css';
import '../../css/d/dv8e4qb1r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4g3hccck"/><path class="dv8e4qb1r"/>`,
		"fallback": "selfhst:tubetimeout-dark",
	});
}

export default Component;
