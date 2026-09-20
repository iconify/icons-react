import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7elkzbfd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7elkzbfd"/>`,
		"fallback": "pinhead:person-lounging-on-lounger",
	});
}

export default Component;
