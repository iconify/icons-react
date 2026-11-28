import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tl3pr2-vp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tl3pr2-vp"/>`,
		"fallback": "noviair-light:underline",
	});
}

export default Component;
