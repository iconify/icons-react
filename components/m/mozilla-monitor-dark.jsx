import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m18h498ob.css';
import '../../css/c/cpghrcrth.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m18h498ob"/><path class="cpghrcrth"/>`,
		"fallback": "selfhst:mozilla-monitor-dark",
	});
}

export default Component;
