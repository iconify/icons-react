import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m00o5vb5t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m00o5vb5t"/>`,
		"fallback": "selfhst:seq-light",
	});
}

export default Component;
