import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrf-vebip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrf-vebip"/>`,
		"fallback": "thesvg:unacademy",
	});
}

export default Component;
