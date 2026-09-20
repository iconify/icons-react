import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym5yr26bi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym5yr26bi"/>`,
		"fallback": "mdi:vector-point",
	});
}

export default Component;
