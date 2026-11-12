import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbrrtibxz.css';
import '../../css/i/i5rwfcc2z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbrrtibxz"/><path class="i5rwfcc2z"/>`,
		"fallback": "selfhst:linux-update-dashboard-dark",
	});
}

export default Component;
