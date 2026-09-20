import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxpz6x56l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxpz6x56l"/>`,
		"fallback": "mdi:radio",
	});
}

export default Component;
