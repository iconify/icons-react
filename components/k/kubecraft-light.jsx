import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmyfz1bqu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmyfz1bqu"/>`,
		"fallback": "selfhst:kubecraft-light",
	});
}

export default Component;
