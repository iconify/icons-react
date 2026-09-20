import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw60h-bby.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw60h-bby"/>`,
		"fallback": "mdi:wall-sconce-flat-variant-outline",
	});
}

export default Component;
