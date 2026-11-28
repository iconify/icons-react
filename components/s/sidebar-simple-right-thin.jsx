import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqjozml0v.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqjozml0v"/>`,
		"fallback": "pullo:sidebar-simple-right-thin",
	});
}

export default Component;
