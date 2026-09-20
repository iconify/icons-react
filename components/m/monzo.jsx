import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt2-f046c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt2-f046c"/>`,
		"fallback": "thesvg-color:monzo",
	});
}

export default Component;
