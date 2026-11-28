import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dalre-d-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dalre-d-o"/>`,
		"fallback": "iconaut:route-x-solid",
	});
}

export default Component;
