import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl_gb3b1a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl_gb3b1a"/>`,
		"fallback": "la:user-shield",
	});
}

export default Component;
