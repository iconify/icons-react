import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4rlqfbiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4rlqfbiw"/>`,
		"fallback": "keyline-icons:send-horizontal",
	});
}

export default Component;
