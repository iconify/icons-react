import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fygf62kln.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fygf62kln"/>`,
		"fallback": "fa-solid:record-vinyl",
	});
}

export default Component;
