import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/htjo5eb_j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="htjo5eb_j"/>`,
		"fallback": "icon-park-outline:nintendo-switch",
	});
}

export default Component;
