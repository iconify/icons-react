import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2x85_bqr.css';

const viewBox = {"width":464,"height":464};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2x85_bqr"/>`,
		"fallback": "ps:msn-messenger",
	});
}

export default Component;
