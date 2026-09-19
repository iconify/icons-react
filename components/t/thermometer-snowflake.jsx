import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7roznlfu.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7roznlfu"/>`,
		"fallback": "f7:thermometer-snowflake",
	});
}

export default Component;
