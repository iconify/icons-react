import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4dk4o63l.css';
import '../../css/r/rit0h486c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4dk4o63l"/><path class="rit0h486c"/>`,
		"fallback": "mage:phone-cancel-fill",
	});
}

export default Component;
