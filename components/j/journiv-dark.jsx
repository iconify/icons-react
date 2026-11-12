import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgs5ujm3w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgs5ujm3w"/>`,
		"fallback": "selfhst:journiv-dark",
	});
}

export default Component;
