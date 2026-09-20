import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhj1_zgpo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhj1_zgpo"/>`,
		"fallback": "la:transgender",
	});
}

export default Component;
