import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ed4k_eb1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ed4k_eb1t"/>`,
		"fallback": "cbi:ubiquiti-usg-p3",
	});
}

export default Component;
