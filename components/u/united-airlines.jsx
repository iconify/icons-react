import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojp5e3b6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojp5e3b6v"/>`,
		"fallback": "thesvg:united-airlines",
	});
}

export default Component;
