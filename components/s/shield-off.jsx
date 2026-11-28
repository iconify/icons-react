import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou0s-60bv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou0s-60bv"/>`,
		"fallback": "noviair-light:shield-off",
	});
}

export default Component;
