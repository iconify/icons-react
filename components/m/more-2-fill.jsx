import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hj9e8_bzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hj9e8_bzv"/>`,
		"fallback": "ri:more-2-fill",
	});
}

export default Component;
