import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-farr_vx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-farr_vx"/>`,
		"fallback": "qlementine-icons:jump-backwards-16",
	});
}

export default Component;
