import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/olt9o2bdi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="olt9o2bdi"/>`,
		"fallback": "la:sliders-h-solid",
	});
}

export default Component;
