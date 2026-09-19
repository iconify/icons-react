import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwu8b083h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwu8b083h"/>`,
		"fallback": "cbi:ring-alarm-panel",
	});
}

export default Component;
