import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt7-eyb8l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt7-eyb8l"/>`,
		"fallback": "qlementine-icons:step-back-16",
	});
}

export default Component;
