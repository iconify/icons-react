import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb9hdq23h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb9hdq23h"/>`,
		"fallback": "icon-park-outline:six-points",
	});
}

export default Component;
