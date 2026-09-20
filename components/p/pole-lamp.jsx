import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo3u11b1i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vo3u11b1i"/>`,
		"fallback": "roentgen:pole-lamp",
	});
}

export default Component;
