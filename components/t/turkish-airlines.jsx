import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuhfnab8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuhfnab8n"/>`,
		"fallback": "thesvg-color:turkish-airlines",
	});
}

export default Component;
