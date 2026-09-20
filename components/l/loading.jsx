import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s82wpcb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s82wpcb9v"/>`,
		"fallback": "mdi-light:loading",
	});
}

export default Component;
