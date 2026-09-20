import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inf75xt8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inf75xt8u"/>`,
		"fallback": "tabler:moon-stars",
	});
}

export default Component;
