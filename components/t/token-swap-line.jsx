import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2j8np86l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2j8np86l"/>`,
		"fallback": "ri:token-swap-line",
	});
}

export default Component;
