import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udjtoqb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="udjtoqb_p"/>`,
		"fallback": "simple-icons:system76",
	});
}

export default Component;
