import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2zxg1bax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2zxg1bax"/>`,
		"fallback": "griddy-icons:tooth-crack-filled",
	});
}

export default Component;
