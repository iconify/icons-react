import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip__v4btt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ip__v4btt"/>`,
		"fallback": "vadivam:square",
	});
}

export default Component;
