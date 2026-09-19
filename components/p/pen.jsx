import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua8c-eb0e.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua8c-eb0e"/>`,
		"fallback": "fa7-solid:pen",
	});
}

export default Component;
