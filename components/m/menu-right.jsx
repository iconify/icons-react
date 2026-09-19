import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpw970bhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpw970bhl"/>`,
		"fallback": "gg:menu-right",
	});
}

export default Component;
