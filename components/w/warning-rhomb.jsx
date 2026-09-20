import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffll-1b4k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffll-1b4k"/>`,
		"fallback": "ix:warning-rhomb",
	});
}

export default Component;
