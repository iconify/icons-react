import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlko4hp7h.css';

const viewBox = {"width":580,"height":684};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlko4hp7h"/>`,
		"fallback": "ls:server",
	});
}

export default Component;
