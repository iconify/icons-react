import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zgvm7gdme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zgvm7gdme"/>`,
		"fallback": "guidance:male-sign",
	});
}

export default Component;
