import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz4yn8bbc.css';

const viewBox = {"width":553.38,"height":78.93};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz4yn8bbc"/>`,
		"fallback": "thesvg-color:marqeta-dark",
	});
}

export default Component;
