import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5wv_8bzu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5wv_8bzu"/>`,
		"fallback": "openmoji:upload",
	});
}

export default Component;
