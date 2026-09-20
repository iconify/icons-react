import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuhlkkm_e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuhlkkm_e"/>`,
		"fallback": "streamline:ringing-bell-notification",
	});
}

export default Component;
