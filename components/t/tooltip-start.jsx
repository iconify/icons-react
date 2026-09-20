import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pme8--b2w.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pme8--b2w"/>`,
		"fallback": "memory:tooltip-start",
	});
}

export default Component;
