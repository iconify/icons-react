import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymsx6qb8v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymsx6qb8v"/>`,
		"fallback": "streamline-plump-color:signal-full-flat",
	});
}

export default Component;
