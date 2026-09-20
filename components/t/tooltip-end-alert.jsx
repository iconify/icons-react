import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b7pgm6_vw.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b7pgm6_vw"/>`,
		"fallback": "memory:tooltip-end-alert",
	});
}

export default Component;
