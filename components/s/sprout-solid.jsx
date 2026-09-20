import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg7_4ub4e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vg7_4ub4e"/>`,
		"fallback": "streamline:sprout-solid",
	});
}

export default Component;
