import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5_z45b9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5_z45b9s"/>`,
		"fallback": "cbi:ubiquiti-ap",
	});
}

export default Component;
