import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve7xr_b_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve7xr_b_l"/>`,
		"fallback": "simple-icons:junit5",
	});
}

export default Component;
