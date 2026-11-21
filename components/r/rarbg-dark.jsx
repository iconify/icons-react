import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t60l4c3ug.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t60l4c3ug"/>`,
		"fallback": "selfhst:rarbg-dark",
	});
}

export default Component;
