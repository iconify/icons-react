import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/av8ob7b1e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="av8ob7b1e"/>`,
		"fallback": "lsicon:volume-outline",
	});
}

export default Component;
