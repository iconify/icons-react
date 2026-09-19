import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpfjnxb9c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpfjnxb9c"/>`,
		"fallback": "icon-park-outline:rocking-horse",
	});
}

export default Component;
