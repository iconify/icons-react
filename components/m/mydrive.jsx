import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl7vwl9vy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl7vwl9vy"/>`,
		"fallback": "selfhst:mydrive",
	});
}

export default Component;
