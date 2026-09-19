import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tc-b0jlzp.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tc-b0jlzp"/>`,
		"fallback": "zmdi:keyboard",
	});
}

export default Component;
