import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqyr_1b6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqyr_1b6e"/>`,
		"fallback": "uis:object-group",
	});
}

export default Component;
