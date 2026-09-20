import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2n01eb9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2n01eb9s"/>`,
		"fallback": "mdi:rubbish-outline",
	});
}

export default Component;
