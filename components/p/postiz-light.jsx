import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw2zm6rod.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw2zm6rod"/>`,
		"fallback": "selfhst:postiz-light",
	});
}

export default Component;
