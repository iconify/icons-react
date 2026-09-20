import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9_dc2bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h9_dc2bvg"/>`,
		"fallback": "mdi:panorama-horizontal-outline",
	});
}

export default Component;
