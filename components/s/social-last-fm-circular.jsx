import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jva7wh10t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jva7wh10t"/>`,
		"fallback": "typcn:social-last-fm-circular",
	});
}

export default Component;
