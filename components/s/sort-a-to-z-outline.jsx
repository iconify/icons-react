import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it6_3nsgg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it6_3nsgg"/>`,
		"fallback": "lsicon:sort-a-to-z-outline",
	});
}

export default Component;
