import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd040z9hi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd040z9hi"/>`,
		"fallback": "selfhst:omnipoly-light",
	});
}

export default Component;
