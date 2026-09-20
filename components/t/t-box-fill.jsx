import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jatnfr4_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jatnfr4_r"/>`,
		"fallback": "ri:t-box-fill",
	});
}

export default Component;
