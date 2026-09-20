import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p86ndqb-u.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p86ndqb-u"/>`,
		"fallback": "lineicons:thumbs-up",
	});
}

export default Component;
