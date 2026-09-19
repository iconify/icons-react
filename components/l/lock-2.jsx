import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0_p_sbcd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0_p_sbcd"/>`,
		"fallback": "icons8:lock-2",
	});
}

export default Component;
