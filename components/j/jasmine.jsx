import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inxm--e7c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inxm--e7c"/>`,
		"fallback": "file-icons:jasmine",
	});
}

export default Component;
