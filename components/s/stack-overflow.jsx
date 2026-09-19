import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajvt07bsx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajvt07bsx"/>`,
		"fallback": "fa7-brands:stack-overflow",
	});
}

export default Component;
