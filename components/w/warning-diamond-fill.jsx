import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tq83v1bct.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tq83v1bct"/>`,
		"fallback": "carbon:warning-diamond-fill",
	});
}

export default Component;
