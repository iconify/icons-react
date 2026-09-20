import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v02yasbok.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v02yasbok"/>`,
		"fallback": "streamline:interface-edit-flip-bottom-alternate-1-flip-bottom-object-work",
	});
}

export default Component;
