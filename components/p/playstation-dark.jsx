import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iqk2x3b6t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iqk2x3b6t"/>`,
		"fallback": "selfhst:playstation-dark",
	});
}

export default Component;
