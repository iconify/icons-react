import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h146hzb6k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h146hzb6k"/>`,
		"fallback": "selfhst:tugtainer-light",
	});
}

export default Component;
