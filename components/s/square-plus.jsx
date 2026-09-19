import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk5xcim_w.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk5xcim_w"/>`,
		"fallback": "fa6-regular:square-plus",
	});
}

export default Component;
