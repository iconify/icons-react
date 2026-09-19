import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e01otg9wn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e01otg9wn"/>`,
		"fallback": "icon-park-outline:left-small-up",
	});
}

export default Component;
