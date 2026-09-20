import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oob8d17yl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oob8d17yl"/>`,
		"fallback": "thesvg-color:salt-project",
	});
}

export default Component;
