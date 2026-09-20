import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wufnt-66i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wufnt-66i"/>`,
		"fallback": "selfhst:it-tools-light",
	});
}

export default Component;
