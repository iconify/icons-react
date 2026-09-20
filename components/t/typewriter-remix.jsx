import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/niqn0ibql.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="niqn0ibql"/>`,
		"fallback": "streamline-flex:typewriter-remix",
	});
}

export default Component;
