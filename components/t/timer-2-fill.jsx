import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu2s_jbwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu2s_jbwc"/>`,
		"fallback": "ri:timer-2-fill",
	});
}

export default Component;
