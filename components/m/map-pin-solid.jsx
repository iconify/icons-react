import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuk4pobuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuk4pobuh"/>`,
		"fallback": "withicons:map-pin-solid",
	});
}

export default Component;
