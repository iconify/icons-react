import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r1xfj5k7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary r1xfj5k7t"/>`,
		"fallback": "iconaut:text-cursor-duotone",
	});
}

export default Component;
