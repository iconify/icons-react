import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8l390kbt.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8l390kbt"/>`,
		"fallback": "fa-solid:spell-check",
	});
}

export default Component;
