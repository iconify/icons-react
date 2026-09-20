import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wproyx9nf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wproyx9nf"/>`,
		"fallback": "selfhst:plausible-light",
	});
}

export default Component;
