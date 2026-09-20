import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy9tbfb-j.css';
import '../../css/p/pj07l70hj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy9tbfb-j"/><path class="pj07l70hj"/>`,
		"fallback": "octicon:square-circle-16",
	});
}

export default Component;
