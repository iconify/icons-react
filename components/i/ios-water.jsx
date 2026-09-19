import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-ahils_u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-ahils_u"/>`,
		"fallback": "ion:ios-water",
	});
}

export default Component;
