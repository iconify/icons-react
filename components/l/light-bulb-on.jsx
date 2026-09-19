import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_2q0_01r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_2q0_01r"/>`,
		"fallback": "boxicons:light-bulb-on",
	});
}

export default Component;
