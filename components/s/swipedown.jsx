import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kje3rqtmk.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kje3rqtmk"/>`,
		"fallback": "whh:swipedown",
	});
}

export default Component;
