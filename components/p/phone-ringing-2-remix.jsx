import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x88eaq4ac.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x88eaq4ac"/>`,
		"fallback": "streamline:phone-ringing-2-remix",
	});
}

export default Component;
