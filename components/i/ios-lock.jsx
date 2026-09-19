import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lao1fjbyu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lao1fjbyu"/>`,
		"fallback": "ion:ios-lock",
	});
}

export default Component;
