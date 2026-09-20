import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xy2y_xbda.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xy2y_xbda"/>`,
		"fallback": "selfhst:openlist-dark",
	});
}

export default Component;
