import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1ej1doum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1ej1doum"/>`,
		"fallback": "coolicons:triangle-check-round",
	});
}

export default Component;
