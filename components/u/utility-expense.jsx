import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh1aksb7t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh1aksb7t"/>`,
		"fallback": "carbon:utility-expense",
	});
}

export default Component;
