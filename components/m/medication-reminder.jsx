import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvis7qbvb.css';
import '../../css/s/s9ppw9blh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvis7qbvb"/><circle class="s9ppw9blh"/>`,
		"fallback": "carbon:medication-reminder",
	});
}

export default Component;
