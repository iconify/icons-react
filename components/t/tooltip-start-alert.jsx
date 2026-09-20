import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb2y1ebum.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb2y1ebum"/>`,
		"fallback": "memory:tooltip-start-alert",
	});
}

export default Component;
