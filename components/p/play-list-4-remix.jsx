import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y6nv8rb8v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y6nv8rb8v"/>`,
		"fallback": "streamline-flex:play-list-4-remix",
	});
}

export default Component;
