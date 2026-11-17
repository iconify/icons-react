import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn0i6acvj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn0i6acvj"/>`,
		"fallback": "selfhst:overtchat-light",
	});
}

export default Component;
