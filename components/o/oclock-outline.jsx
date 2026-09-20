import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6ost54tx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6ost54tx"/>`,
		"fallback": "lsicon:oclock-outline",
	});
}

export default Component;
