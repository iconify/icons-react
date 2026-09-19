import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/typ1igblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="typ1igblf"/>`,
		"fallback": "griddy-icons:qr-code-scan",
	});
}

export default Component;
