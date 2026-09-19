import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml0h7rsel.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml0h7rsel"/>`,
		"fallback": "fa6-regular:snowflake",
	});
}

export default Component;
