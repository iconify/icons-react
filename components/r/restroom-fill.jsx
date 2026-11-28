import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/afo1ixbel.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="afo1ixbel"/>`,
		"fallback": "pullo:restroom-fill",
	});
}

export default Component;
