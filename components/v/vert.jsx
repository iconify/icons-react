import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo0p6m5ud.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo0p6m5ud"/>`,
		"fallback": "selfhst:vert",
	});
}

export default Component;
