import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5vpu_9rr.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5vpu_9rr"/>`,
		"fallback": "f7:keyboard",
	});
}

export default Component;
