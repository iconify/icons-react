import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdp7vcb0m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdp7vcb0m"/>`,
		"fallback": "selfhst:nextcloud-notes-dark",
	});
}

export default Component;
