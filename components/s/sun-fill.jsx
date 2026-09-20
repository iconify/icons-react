import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tm_oih19f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tm_oih19f"/>`,
		"fallback": "ri:sun-fill",
	});
}

export default Component;
