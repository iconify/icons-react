import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nds4ksffh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nds4ksffh"/>`,
		"fallback": "la:mastodon",
	});
}

export default Component;
