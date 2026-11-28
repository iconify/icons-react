import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dioopbc0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dioopbc0k"/>`,
		"fallback": "noviair:mail-open-check",
	});
}

export default Component;
