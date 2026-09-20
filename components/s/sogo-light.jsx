import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsni9xlze.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsni9xlze"/>`,
		"fallback": "selfhst:sogo-light",
	});
}

export default Component;
