import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdl6-jbyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gdl6-jbyb"/>`,
		"fallback": "basil:send-outline",
	});
}

export default Component;
