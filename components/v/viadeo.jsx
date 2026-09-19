import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzy7q7fnz.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzy7q7fnz"/>`,
		"fallback": "fa7-brands:viadeo",
	});
}

export default Component;
