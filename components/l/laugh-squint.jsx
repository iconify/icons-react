import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t12a6fb-c.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t12a6fb-c"/>`,
		"fallback": "fa7-regular:laugh-squint",
	});
}

export default Component;
