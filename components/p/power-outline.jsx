import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkly0do7g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkly0do7g"/>`,
		"fallback": "lsicon:power-outline",
	});
}

export default Component;
