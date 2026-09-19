import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tynb5sbsm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tynb5sbsm"/>`,
		"fallback": "garden:number-stroke-16",
	});
}

export default Component;
