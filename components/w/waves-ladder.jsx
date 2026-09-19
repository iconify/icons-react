import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrbxo8bxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrbxo8bxp"/>`,
		"fallback": "hugeicons:waves-ladder",
	});
}

export default Component;
