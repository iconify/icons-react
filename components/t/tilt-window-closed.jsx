import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzih4kbct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzih4kbct"/>`,
		"fallback": "cbi:tilt-window-closed",
	});
}

export default Component;
