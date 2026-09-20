import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l44qhg_hc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l44qhg_hc"/>`,
		"fallback": "mdi:light-switch-off",
	});
}

export default Component;
