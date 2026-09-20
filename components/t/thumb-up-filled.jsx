import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m08qq3b8m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m08qq3b8m"/>`,
		"fallback": "lsicon:thumb-up-filled",
	});
}

export default Component;
