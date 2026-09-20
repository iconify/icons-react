import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jam089b_t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jam089b_t"/>`,
		"fallback": "streamline:screen-curve-solid",
	});
}

export default Component;
