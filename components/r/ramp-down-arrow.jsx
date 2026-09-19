import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmk0w5brw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmk0w5brw"/>`,
		"fallback": "guidance:ramp-down-arrow",
	});
}

export default Component;
