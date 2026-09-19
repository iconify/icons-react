import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5778rb2h.css';

const viewBox = {"width":1408,"height":1760};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5778rb2h"/>`,
		"fallback": "fa:street-view",
	});
}

export default Component;
