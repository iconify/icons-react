import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4i4robuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4i4robuu"/>`,
		"fallback": "mdi:meat-off-outline",
	});
}

export default Component;
