import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nw3w5nb6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nw3w5nb6s"/>`,
		"fallback": "keyline-icons:shield-check-sharp",
	});
}

export default Component;
