import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7imp4bxf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7imp4bxf"/>`,
		"fallback": "fa6-regular:thumbs-down",
	});
}

export default Component;
