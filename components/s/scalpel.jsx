import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_f_r3bhk.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_f_r3bhk"/>`,
		"fallback": "system-uicons:scalpel",
	});
}

export default Component;
