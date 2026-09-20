import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdkp318ui.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdkp318ui"/>`,
		"fallback": "subway:usd",
	});
}

export default Component;
