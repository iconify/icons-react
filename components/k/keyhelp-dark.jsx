import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w71383bwh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w71383bwh"/>`,
		"fallback": "selfhst:keyhelp-dark",
	});
}

export default Component;
