import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj9kqqb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nj9kqqb1z"/>`,
		"fallback": "thesvg:suitest",
	});
}

export default Component;
