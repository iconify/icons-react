import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1vrx_b4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1vrx_b4e"/>`,
		"fallback": "pixelarticons:missed-call",
	});
}

export default Component;
