import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb16_1llh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb16_1llh"/>`,
		"fallback": "cil:user-female",
	});
}

export default Component;
