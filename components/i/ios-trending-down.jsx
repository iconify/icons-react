import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hitd8xbpl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hitd8xbpl"/>`,
		"fallback": "ion:ios-trending-down",
	});
}

export default Component;
