import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5f9ul20i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5f9ul20i"/>`,
		"fallback": "cbi:rooms-front-door",
	});
}

export default Component;
