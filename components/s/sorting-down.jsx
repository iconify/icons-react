import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igo33jmrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igo33jmrb"/>`,
		"fallback": "hugeicons:sorting-down",
	});
}

export default Component;
