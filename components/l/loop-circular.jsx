import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmp74nh4p.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmp74nh4p"/>`,
		"fallback": "oi:loop-circular",
	});
}

export default Component;
