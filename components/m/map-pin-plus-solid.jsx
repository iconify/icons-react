import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l1zd-dmnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l1zd-dmnf"/>`,
		"fallback": "iconaut:map-pin-plus-solid",
	});
}

export default Component;
