import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2_xb8b7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j2_xb8b7h"/>`,
		"fallback": "streamline-sharp:phone-ringing-1-remix",
	});
}

export default Component;
