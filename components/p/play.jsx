import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgv0fo33c.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgv0fo33c"/>`,
		"fallback": "fa7-solid:play",
	});
}

export default Component;
