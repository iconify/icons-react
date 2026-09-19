import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khql2o0xz.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khql2o0xz"/>`,
		"fallback": "garden:stamp-stroke-12",
	});
}

export default Component;
