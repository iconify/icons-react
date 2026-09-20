import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsvmt9l8g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsvmt9l8g"/>`,
		"fallback": "lsicon:linecap-square-outline",
	});
}

export default Component;
