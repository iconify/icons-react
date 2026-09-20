import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h227az4ss.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h227az4ss"/>`,
		"fallback": "selfhst:meshcore-light",
	});
}

export default Component;
