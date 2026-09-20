import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy-x3bcet.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy-x3bcet"/>`,
		"fallback": "selfhst:punipuni-dark",
	});
}

export default Component;
