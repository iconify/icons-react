import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7f9325fo.css';
import '../../css/o/o2n603b_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s7f9325fo"/><path class="o2n603b_x"/>`,
		"fallback": "solar:sim-cards-bold-duotone",
	});
}

export default Component;
