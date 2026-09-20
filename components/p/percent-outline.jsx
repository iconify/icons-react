import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq8y7_swj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hq8y7_swj"/>`,
		"fallback": "lsicon:percent-outline",
	});
}

export default Component;
