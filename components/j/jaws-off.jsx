import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je12_vbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je12_vbxi"/>`,
		"fallback": "mdi:jaws-off",
	});
}

export default Component;
