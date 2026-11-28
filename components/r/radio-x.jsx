import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1p6subny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1p6subny"/>`,
		"fallback": "noviair-light:radio-x",
	});
}

export default Component;
