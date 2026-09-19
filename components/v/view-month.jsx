import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9-2m5u6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r9-2m5u6e"/>`,
		"fallback": "gg:view-month",
	});
}

export default Component;
