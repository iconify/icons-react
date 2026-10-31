import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5jngf2xf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5jngf2xf"/>`,
		"fallback": "coolicons:menu-alt-2-fill-round",
	});
}

export default Component;
