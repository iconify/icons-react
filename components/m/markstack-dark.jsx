import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdhfqclbu.css';
import '../../css/r/rh-ehybjv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdhfqclbu"/><path class="rh-ehybjv"/>`,
		"fallback": "selfhst:markstack-dark",
	});
}

export default Component;
