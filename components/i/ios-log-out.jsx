import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejh5nmbuc.css';
import '../../css/d/d7j4pp_vq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejh5nmbuc"/><path class="d7j4pp_vq"/>`,
		"fallback": "ion:ios-log-out",
	});
}

export default Component;
