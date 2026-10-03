import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvy90ydya.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvy90ydya"/>`,
		"fallback": "selfhst:questdb-light",
	});
}

export default Component;
