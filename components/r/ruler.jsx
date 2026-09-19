import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3shrqb9n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3shrqb9n"/>`,
		"fallback": "icon-park-outline:ruler",
	});
}

export default Component;
