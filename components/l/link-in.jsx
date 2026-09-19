import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-io5hbcr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-io5hbcr"/>`,
		"fallback": "icon-park-outline:link-in",
	});
}

export default Component;
