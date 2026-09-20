import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btj3do1ta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btj3do1ta"/>`,
		"fallback": "mdi:video-wireless",
	});
}

export default Component;
