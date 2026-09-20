import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aymdm8j7v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aymdm8j7v"/>`,
		"fallback": "selfhst:rancher-light",
	});
}

export default Component;
