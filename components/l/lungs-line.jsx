import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4_b6xb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n4_b6xb1x"/>`,
		"fallback": "ri:lungs-line",
	});
}

export default Component;
