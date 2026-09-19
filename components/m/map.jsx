import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_r8p65rz.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_r8p65rz"/>`,
		"fallback": "fa-solid:map",
	});
}

export default Component;
