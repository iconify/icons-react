import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc1sal3cu.css';
import '../../css/y/yydzvbuei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc1sal3cu wm-k"/><path class="wm-s yydzvbuei"/>`,
		"fallback": "withicons-bauhaus:list-plus",
	});
}

export default Component;
