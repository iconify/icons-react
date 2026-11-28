import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrjmzwb0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary wrjmzwb0j"/>`,
		"fallback": "iconaut:route-duotone",
	});
}

export default Component;
