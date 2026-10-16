import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2j7g4b3h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2j7g4b3h"/>`,
		"fallback": "selfhst:opengym-light",
	});
}

export default Component;
