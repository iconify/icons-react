import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvbrlhbqe.css';
import '../../css/l/lk-fajbek.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvbrlhbqe"/><path class="lk-fajbek"/>`,
		"fallback": "selfhst:prunemate",
	});
}

export default Component;
