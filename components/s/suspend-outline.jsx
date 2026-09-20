import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyozvw1iu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyozvw1iu"/>`,
		"fallback": "lsicon:suspend-outline",
	});
}

export default Component;
