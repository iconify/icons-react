import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxv7o_b5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxv7o_b5v"/>`,
		"fallback": "noviair-light:knife",
	});
}

export default Component;
