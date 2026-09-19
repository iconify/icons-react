import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekt5e2b3e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekt5e2b3e"/>`,
		"fallback": "icon-park-outline:lipstick",
	});
}

export default Component;
