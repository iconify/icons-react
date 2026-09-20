import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gma_0sbwd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gma_0sbwd"/>`,
		"fallback": "roentgen:power-pole-triangle",
	});
}

export default Component;
