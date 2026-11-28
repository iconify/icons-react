import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmv_hrb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cmv_hrb-s"/>`,
		"fallback": "noviair:robot-vacuum-alert",
	});
}

export default Component;
