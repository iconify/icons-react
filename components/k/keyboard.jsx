import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmj_96ose.css';

const viewBox = {"width":36,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmj_96ose"/>`,
		"fallback": "fontisto:keyboard",
	});
}

export default Component;
