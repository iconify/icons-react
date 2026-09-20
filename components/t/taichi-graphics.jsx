import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2mae_b0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2mae_b0z"/>`,
		"fallback": "thesvg-color:taichi-graphics",
	});
}

export default Component;
