import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9czsj7qk.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9czsj7qk"/>`,
		"fallback": "oi:media-pause",
	});
}

export default Component;
