import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4qu6ekcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4qu6ekcb"/>`,
		"fallback": "struq:minus",
	});
}

export default Component;
