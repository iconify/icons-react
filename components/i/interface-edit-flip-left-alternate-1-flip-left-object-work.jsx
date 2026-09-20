import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgel_fcqd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgel_fcqd"/>`,
		"fallback": "streamline:interface-edit-flip-left-alternate-1-flip-left-object-work",
	});
}

export default Component;
