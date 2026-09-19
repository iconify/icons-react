import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfi0w_2co.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfi0w_2co"/>`,
		"fallback": "iconoir:keyframe-plus-in",
	});
}

export default Component;
