import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqc5__bsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqc5__bsa"/>`,
		"fallback": "mdi:slate-open-settings",
	});
}

export default Component;
