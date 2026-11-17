import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twyyp55es.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twyyp55es"/>`,
		"fallback": "cbi:outdoor-motion",
	});
}

export default Component;
