import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze_ex8o5v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze_ex8o5v"/>`,
		"fallback": "selfhst:nyt-letter-boxed-dark",
	});
}

export default Component;
