import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gxplbz68r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gxplbz68r"/>`,
		"fallback": "noviair-light:shield",
	});
}

export default Component;
