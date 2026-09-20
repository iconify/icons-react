import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvqxaqb1c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvqxaqb1c"/>`,
		"fallback": "streamline:interface-edit-flip-top-alternate-1-flip-top-object-work",
	});
}

export default Component;
