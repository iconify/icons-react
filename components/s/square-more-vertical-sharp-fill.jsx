import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2q3aujem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2q3aujem"/>`,
		"fallback": "keyline-icons:square-more-vertical-sharp-fill",
	});
}

export default Component;
