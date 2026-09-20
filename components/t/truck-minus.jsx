import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvze02s-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvze02s-v"/>`,
		"fallback": "keyline-icons:truck-minus",
	});
}

export default Component;
