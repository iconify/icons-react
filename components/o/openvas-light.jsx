import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uz9i9u2gu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uz9i9u2gu"/>`,
		"fallback": "selfhst:openvas-light",
	});
}

export default Component;
