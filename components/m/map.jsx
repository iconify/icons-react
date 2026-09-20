import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyu3vjbhd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyu3vjbhd"/>`,
		"fallback": "vadivam:map",
	});
}

export default Component;
