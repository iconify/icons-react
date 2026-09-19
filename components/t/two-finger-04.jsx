import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okig0vbts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okig0vbts"/>`,
		"fallback": "hugeicons:two-finger-04",
	});
}

export default Component;
