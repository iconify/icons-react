import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxsdhcbkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxsdhcbkq"/>`,
		"fallback": "vadivam:square-text",
	});
}

export default Component;
