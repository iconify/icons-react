import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jawpr1bqa.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jawpr1bqa"/>`,
		"fallback": "fa6-brands:vine",
	});
}

export default Component;
