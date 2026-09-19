import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixke5qqay.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixke5qqay"/>`,
		"fallback": "icon-park-outline:thumbs-up",
	});
}

export default Component;
