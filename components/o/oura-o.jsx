import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kd__n8i3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kd__n8i3c"/>`,
		"fallback": "cbi:oura-o",
	});
}

export default Component;
