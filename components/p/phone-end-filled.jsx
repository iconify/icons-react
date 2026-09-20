import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfgo5ob-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfgo5ob-b"/>`,
		"fallback": "reicon:phone-end-filled",
	});
}

export default Component;
