import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxc2ifb9y.css';

const viewBox = {"width":31,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wxc2ifb9y"/>`,
		"fallback": "fontisto:soundcloud",
	});
}

export default Component;
