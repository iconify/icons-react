import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsk86rcsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsk86rcsd"/>`,
		"fallback": "cbi:panel-glass-side-door-locked",
	});
}

export default Component;
