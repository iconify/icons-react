import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f8ag3311v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f8ag3311v"/>`,
		"fallback": "mynaui:letter-q-solid",
	});
}

export default Component;
