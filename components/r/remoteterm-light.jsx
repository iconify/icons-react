import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urz7vu6vy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urz7vu6vy"/>`,
		"fallback": "selfhst:remoteterm-light",
	});
}

export default Component;
