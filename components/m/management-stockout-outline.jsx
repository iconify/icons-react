import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6_cw359x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6_cw359x"/>`,
		"fallback": "lsicon:management-stockout-outline",
	});
}

export default Component;
