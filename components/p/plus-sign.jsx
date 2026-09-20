import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_hak7-9q.css';
import '../../css/n/n8g0hetvt.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_hak7-9q"/><path class="n8g0hetvt"/>`,
		"fallback": "openmoji:plus-sign",
	});
}

export default Component;
