import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loo_9-4ps.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="loo_9-4ps"/>`,
		"fallback": "picon:json",
	});
}

export default Component;
