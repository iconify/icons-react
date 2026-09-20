import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbirl8byl.css';
import '../../css/h/h546kdb4h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbirl8byl"/><path class="h546kdb4h"/>`,
		"fallback": "selfhst:rachio",
	});
}

export default Component;
