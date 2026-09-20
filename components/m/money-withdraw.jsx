import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu56lfw9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu56lfw9w"/>`,
		"fallback": "uil:money-withdraw",
	});
}

export default Component;
