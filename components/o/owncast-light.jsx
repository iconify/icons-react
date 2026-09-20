import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jan45d7nm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jan45d7nm"/>`,
		"fallback": "selfhst:owncast-light",
	});
}

export default Component;
