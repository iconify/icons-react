import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rc21h7bck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rc21h7bck"/>`,
		"fallback": "iconamoon:sorting-center-light",
	});
}

export default Component;
