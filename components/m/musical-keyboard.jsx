import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ail5k0ifi.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ail5k0ifi"/>`,
		"fallback": "dinkie-icons:musical-keyboard",
	});
}

export default Component;
