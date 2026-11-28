import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgc7bi6_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tgc7bi6_l"/>`,
		"fallback": "noviair-light:radio",
	});
}

export default Component;
