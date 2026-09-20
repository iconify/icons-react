import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au9d8ib7r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au9d8ib7r"/>`,
		"fallback": "selfhst:kodi-light",
	});
}

export default Component;
