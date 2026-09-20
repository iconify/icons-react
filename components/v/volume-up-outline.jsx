import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqj7xac8h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqj7xac8h"/>`,
		"fallback": "lsicon:volume-up-outline",
	});
}

export default Component;
