import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur7a1h35t.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur7a1h35t"/>`,
		"fallback": "garden:line-social-stroke-12",
	});
}

export default Component;
