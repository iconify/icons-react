import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm2opabqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm2opabqj"/>`,
		"fallback": "noviair-light:type",
	});
}

export default Component;
