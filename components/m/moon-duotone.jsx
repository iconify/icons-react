import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sw-2bgbkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary sw-2bgbkd"/>`,
		"fallback": "iconaut:moon-duotone",
	});
}

export default Component;
