import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfpa6p97h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rfpa6p97h"/>`,
		"fallback": "streamline:two-finger-tap-remix",
	});
}

export default Component;
