import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx7mcrbxw.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx7mcrbxw"/>`,
		"fallback": "zmdi:swap",
	});
}

export default Component;
