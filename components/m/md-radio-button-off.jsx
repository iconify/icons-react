import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjjyz8b6u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjjyz8b6u"/>`,
		"fallback": "ion:md-radio-button-off",
	});
}

export default Component;
