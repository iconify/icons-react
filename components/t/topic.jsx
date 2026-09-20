import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua5l0n7zd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua5l0n7zd"/>`,
		"fallback": "ix:topic",
	});
}

export default Component;
