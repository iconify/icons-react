import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg96pwbrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg96pwbrk"/>`,
		"fallback": "cbi:shutter-0",
	});
}

export default Component;
