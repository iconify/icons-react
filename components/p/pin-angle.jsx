import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dq0qa4bre.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dq0qa4bre"/>`,
		"fallback": "bi:pin-angle",
	});
}

export default Component;
