import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v96n9tbrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v96n9tbrc"/>`,
		"fallback": "mdi:picture-vr",
	});
}

export default Component;
