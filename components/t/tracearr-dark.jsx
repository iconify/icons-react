import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyzg-tbfy.css';
import '../../css/b/baziz2k_k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyzg-tbfy"/><path class="baziz2k_k"/>`,
		"fallback": "selfhst:tracearr-dark",
	});
}

export default Component;
