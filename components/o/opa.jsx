import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd7ji-5hu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd7ji-5hu"/>`,
		"fallback": "file-icons:opa",
	});
}

export default Component;
