import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/js_8mh9rd.css';

const viewBox = {"width":1025,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="js_8mh9rd"/>`,
		"fallback": "whh:tabletscreensize",
	});
}

export default Component;
