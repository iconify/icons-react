import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i23wt1g6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i23wt1g6w"/>`,
		"fallback": "mynaui:letter-u-solid",
	});
}

export default Component;
