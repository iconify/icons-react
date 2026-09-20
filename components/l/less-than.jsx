import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5irhn0gp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5irhn0gp"/>`,
		"fallback": "mdi:less-than",
	});
}

export default Component;
