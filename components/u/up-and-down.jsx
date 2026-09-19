import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9n0gb6of.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9n0gb6of"/>`,
		"fallback": "icon-park-outline:up-and-down",
	});
}

export default Component;
