import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv4b9k1_p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv4b9k1_p"/>`,
		"fallback": "la:modx",
	});
}

export default Component;
