import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj-4iwbcz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj-4iwbcz"/>`,
		"fallback": "selfhst:socket-io",
	});
}

export default Component;
