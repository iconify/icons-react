import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y54km89ho.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y54km89ho"/>`,
		"fallback": "icon-park-outline:popcorn",
	});
}

export default Component;
