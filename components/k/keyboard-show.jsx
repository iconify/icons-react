import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe07qvbqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe07qvbqv"/>`,
		"fallback": "uil:keyboard-show",
	});
}

export default Component;
