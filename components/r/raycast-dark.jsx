import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar3-wu62s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar3-wu62s"/>`,
		"fallback": "selfhst:raycast-dark",
	});
}

export default Component;
