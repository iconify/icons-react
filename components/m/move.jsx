import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2h6o6bzy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2h6o6bzy"/>`,
		"fallback": "icon-park-outline:move",
	});
}

export default Component;
