import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4j-tabeu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z4j-tabeu"/>`,
		"fallback": "solar:slider-horizontal-outline",
	});
}

export default Component;
