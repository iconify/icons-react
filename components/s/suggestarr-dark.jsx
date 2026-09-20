import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrhf20x2h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrhf20x2h"/>`,
		"fallback": "selfhst:suggestarr-dark",
	});
}

export default Component;
