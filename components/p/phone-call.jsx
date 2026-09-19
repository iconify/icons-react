import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5b39c8fm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5b39c8fm"/>`,
		"fallback": "hugeicons:phone-call",
	});
}

export default Component;
