import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci0f6_brv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci0f6_brv"/>`,
		"fallback": "la:sellcast",
	});
}

export default Component;
