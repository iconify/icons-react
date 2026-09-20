import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jolbf1bpr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jolbf1bpr"/>`,
		"fallback": "selfhst:protondb-light",
	});
}

export default Component;
