import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s36fjhbrw.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s36fjhbrw"/>`,
		"fallback": "fa7-solid:tent-arrow-left-right",
	});
}

export default Component;
