import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzcfu_bvm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzcfu_bvm"/>`,
		"fallback": "garden:sandbox-fill-16",
	});
}

export default Component;
