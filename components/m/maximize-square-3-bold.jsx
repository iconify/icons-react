import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivgsmkbsz.css';
import '../../css/x/x_vwkib6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivgsmkbsz"/><path clip-rule="evenodd" class="x_vwkib6h"/>`,
		"fallback": "solar:maximize-square-3-bold",
	});
}

export default Component;
