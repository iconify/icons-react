import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-3nknbgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-3nknbgs"/>`,
		"fallback": "vadivam:square-off",
	});
}

export default Component;
