import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9rcskbvp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9rcskbvp"/>`,
		"fallback": "ion:md-train",
	});
}

export default Component;
