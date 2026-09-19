import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vns7f7bfj.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vns7f7bfj"/>`,
		"fallback": "fa7-brands:waze",
	});
}

export default Component;
