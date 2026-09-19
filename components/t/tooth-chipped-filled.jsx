import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjax9hm8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjax9hm8c"/>`,
		"fallback": "griddy-icons:tooth-chipped-filled",
	});
}

export default Component;
