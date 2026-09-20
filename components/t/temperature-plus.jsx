import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azf7pht0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azf7pht0e"/>`,
		"fallback": "uil:temperature-plus",
	});
}

export default Component;
