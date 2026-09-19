import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6p-n4b3c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6p-n4b3c"/>`,
		"fallback": "icon-park-outline:off-screen",
	});
}

export default Component;
