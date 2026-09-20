import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8l9c_b0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8l9c_b0p"/>`,
		"fallback": "thesvg:saturn",
	});
}

export default Component;
