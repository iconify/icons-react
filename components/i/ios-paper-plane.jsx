import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3z00db-n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3z00db-n"/>`,
		"fallback": "ion:ios-paper-plane",
	});
}

export default Component;
