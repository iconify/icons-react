import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy-8mqb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hy-8mqb2f"/>`,
		"fallback": "ri:money-rupee-circle-fill",
	});
}

export default Component;
