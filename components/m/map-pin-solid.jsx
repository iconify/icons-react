import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g527k7hvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g527k7hvk"/>`,
		"fallback": "iconaut:map-pin-solid",
	});
}

export default Component;
