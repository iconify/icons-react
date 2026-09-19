import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9-rrjd5r.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9-rrjd5r"/>`,
		"fallback": "fa6-regular:square-caret-left",
	});
}

export default Component;
