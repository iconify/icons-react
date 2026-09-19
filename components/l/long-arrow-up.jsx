import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z06xlpj0d.css';

const viewBox = {"width":256,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z06xlpj0d"/>`,
		"fallback": "zmdi:long-arrow-up",
	});
}

export default Component;
