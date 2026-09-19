import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g503shx1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g503shx1v"/>`,
		"fallback": "circum:tablets-1",
	});
}

export default Component;
