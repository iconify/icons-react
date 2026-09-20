import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k08wnob5f.css';
import '../../css/w/wyv77qbzm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k08wnob5f"/><path class="wyv77qbzm"/>`,
		"fallback": "selfhst:little-chat-light",
	});
}

export default Component;
