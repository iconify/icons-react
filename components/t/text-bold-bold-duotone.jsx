import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx9l9-clq.css';
import '../../css/y/yfq3bynsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xx9l9-clq"/><path class="yfq3bynsd"/>`,
		"fallback": "solar:text-bold-bold-duotone",
	});
}

export default Component;
