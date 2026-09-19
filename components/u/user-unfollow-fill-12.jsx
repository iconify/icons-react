import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m23wrpw-d.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m23wrpw-d"/>`,
		"fallback": "garden:user-unfollow-fill-12",
	});
}

export default Component;
