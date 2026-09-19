import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy5g290lb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hy5g290lb"/>`,
		"fallback": "fe:intersect",
	});
}

export default Component;
