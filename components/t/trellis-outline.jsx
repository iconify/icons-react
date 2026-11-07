import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh9ph61iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dh9ph61iz"/>`,
		"fallback": "solar:trellis-outline",
	});
}

export default Component;
