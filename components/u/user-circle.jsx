import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9y-47bto.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9y-47bto"/>`,
		"fallback": "fa-regular:user-circle",
	});
}

export default Component;
