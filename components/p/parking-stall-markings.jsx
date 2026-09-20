import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt03rbywx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dt03rbywx"/>`,
		"fallback": "pinhead:parking-stall-markings",
	});
}

export default Component;
