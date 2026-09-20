import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc1392btm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc1392btm"/>`,
		"fallback": "roentgen:low-horizontal-bars",
	});
}

export default Component;
