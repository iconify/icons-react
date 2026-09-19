import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6x13_b1f.css';
import '../../css/j/jupyvy7ol.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6x13_b1f"/><path class="jupyvy7ol"/>`,
		"fallback": "carbon:pedestrian-child",
	});
}

export default Component;
