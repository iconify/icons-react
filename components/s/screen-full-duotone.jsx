import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aeyf-3b0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aeyf-3b0p"/>`,
		"fallback": "iconamoon:screen-full-duotone",
	});
}

export default Component;
