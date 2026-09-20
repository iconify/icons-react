import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0k-_7b6l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0k-_7b6l"/>`,
		"fallback": "selfhst:microsoft-sharepoint-2013-dark",
	});
}

export default Component;
