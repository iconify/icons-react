import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydw35orpv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydw35orpv"/>`,
		"fallback": "streamline-block:text-formatting-underline",
	});
}

export default Component;
