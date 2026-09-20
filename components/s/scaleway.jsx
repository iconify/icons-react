import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxbfj8hmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxbfj8hmr"/>`,
		"fallback": "simple-icons:scaleway",
	});
}

export default Component;
