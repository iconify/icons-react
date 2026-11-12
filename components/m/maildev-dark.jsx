import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm366-d-x.css';
import '../../css/j/jutyogb6q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm366-d-x"/><path class="jutyogb6q"/>`,
		"fallback": "selfhst:maildev-dark",
	});
}

export default Component;
