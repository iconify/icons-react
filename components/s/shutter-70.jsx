import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drlc3ff8v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drlc3ff8v"/>`,
		"fallback": "cbi:shutter-70",
	});
}

export default Component;
