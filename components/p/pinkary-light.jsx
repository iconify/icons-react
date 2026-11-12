import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu4567t3w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu4567t3w"/>`,
		"fallback": "selfhst:pinkary-light",
	});
}

export default Component;
