import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpzw5abdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpzw5abdn"/>`,
		"fallback": "mdi:video-input-scart",
	});
}

export default Component;
