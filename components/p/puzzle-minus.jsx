import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/teh_ozbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="teh_ozbsf"/>`,
		"fallback": "mdi:puzzle-minus",
	});
}

export default Component;
