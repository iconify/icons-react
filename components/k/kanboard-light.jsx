import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/deg907bbs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="deg907bbs"/>`,
		"fallback": "selfhst:kanboard-light",
	});
}

export default Component;
