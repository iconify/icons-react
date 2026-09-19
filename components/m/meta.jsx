import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew-dqmb1k.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew-dqmb1k"/>`,
		"fallback": "fa6-brands:meta",
	});
}

export default Component;
