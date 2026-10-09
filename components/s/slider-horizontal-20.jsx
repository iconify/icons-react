import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r08hwea-j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r08hwea-j"/>`,
		"fallback": "energy-icons:slider-horizontal-20",
	});
}

export default Component;
