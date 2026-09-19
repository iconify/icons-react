import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9zfnyb9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9zfnyb9t"/>`,
		"fallback": "cbi:tesla-fan",
	});
}

export default Component;
