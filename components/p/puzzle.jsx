import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we5jwd_ig.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we5jwd_ig"/>`,
		"fallback": "icon-park-solid:puzzle",
	});
}

export default Component;
