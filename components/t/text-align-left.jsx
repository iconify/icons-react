import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcg1trb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcg1trb_b"/>`,
		"fallback": "grommet-icons:text-align-left",
	});
}

export default Component;
