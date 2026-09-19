import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2pxd09sm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2pxd09sm"/>`,
		"fallback": "entypo:level-down",
	});
}

export default Component;
