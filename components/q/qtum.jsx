import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4r1u1cta.css';
import '../../css/k/kmh9fqkcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t4r1u1cta"/><path class="kmh9fqkcc"/>`,
		"fallback": "token:qtum",
	});
}

export default Component;
