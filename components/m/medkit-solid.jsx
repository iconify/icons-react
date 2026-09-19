import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yd610k6nr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yd610k6nr"/>`,
		"fallback": "basil:medkit-solid",
	});
}

export default Component;
