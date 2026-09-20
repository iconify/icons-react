import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au5ft3ime.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au5ft3ime"/>`,
		"fallback": "selfhst:rancher-rio",
	});
}

export default Component;
