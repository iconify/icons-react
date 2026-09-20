import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gepoi3bpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gepoi3bpx"/>`,
		"fallback": "mdi:newspaper-variant-multiple-outline",
	});
}

export default Component;
