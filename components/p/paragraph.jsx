import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi522ibcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bi522ibcb"/>`,
		"fallback": "ci:paragraph",
	});
}

export default Component;
