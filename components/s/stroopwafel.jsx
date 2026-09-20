import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxeb0lukw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxeb0lukw"/>`,
		"fallback": "la:stroopwafel",
	});
}

export default Component;
