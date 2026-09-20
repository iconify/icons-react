import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu9cxub5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu9cxub5l"/>`,
		"fallback": "mdi:neato",
	});
}

export default Component;
