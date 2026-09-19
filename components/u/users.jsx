import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td162ub0j.css';

const viewBox = {"width":750,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td162ub0j"/>`,
		"fallback": "il:users",
	});
}

export default Component;
