import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo1f16ahm.css';

const viewBox = {"width":897,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo1f16ahm"/>`,
		"fallback": "whh:moleskine",
	});
}

export default Component;
