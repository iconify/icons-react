import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uiiytincm.css';
import '../../css/g/g8ll7b7pf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uiiytincm"/><circle class="g8ll7b7pf"/>`,
		"fallback": "ooui:user-chat-ltr",
	});
}

export default Component;
