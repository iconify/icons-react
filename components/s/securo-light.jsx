import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcdh9_b5w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcdh9_b5w"/>`,
		"fallback": "selfhst:securo-light",
	});
}

export default Component;
