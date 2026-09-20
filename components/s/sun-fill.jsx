import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck076b8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xck076b8z"/>`,
		"fallback": "mage:sun-fill",
	});
}

export default Component;
