import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huxi8-spp.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huxi8-spp"/>`,
		"fallback": "memory:minus-circle-fill",
	});
}

export default Component;
