import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5_ov5lgh.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5_ov5lgh"/>`,
		"fallback": "foundation:paint-bucket",
	});
}

export default Component;
