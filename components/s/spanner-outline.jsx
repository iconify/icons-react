import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxn-5736a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxn-5736a"/>`,
		"fallback": "mdi:spanner-outline",
	});
}

export default Component;
