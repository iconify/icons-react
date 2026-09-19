import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4ybl3b8k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4ybl3b8k"/>`,
		"fallback": "icon-park-outline:shield",
	});
}

export default Component;
