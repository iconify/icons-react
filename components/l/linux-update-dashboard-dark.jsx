import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbrrtibxz.css';
import '../../css/f/fu6o8ac5s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbrrtibxz"/><path class="fu6o8ac5s"/>`,
		"fallback": "selfhst:linux-update-dashboard-dark",
	});
}

export default Component;
