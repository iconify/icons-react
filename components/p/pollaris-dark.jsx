import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7g_vdc9v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7g_vdc9v"/>`,
		"fallback": "selfhst:pollaris-dark",
	});
}

export default Component;
