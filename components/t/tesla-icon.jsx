import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hukx58fwz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hukx58fwz"/>`,
		"fallback": "cbi:tesla-icon",
	});
}

export default Component;
