import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oizdzrb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oizdzrb_p"/>`,
		"fallback": "ri:linkedin-fill",
	});
}

export default Component;
