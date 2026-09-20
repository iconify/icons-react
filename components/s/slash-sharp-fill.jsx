import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bsqfb5o5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bsqfb5o5r"/>`,
		"fallback": "keyline-icons:slash-sharp-fill",
	});
}

export default Component;
