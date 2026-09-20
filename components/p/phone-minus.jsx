import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yu2ir04zv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yu2ir04zv"/>`,
		"fallback": "mdi:phone-minus",
	});
}

export default Component;
