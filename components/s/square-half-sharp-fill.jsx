import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sgig6s6kb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sgig6s6kb"/>`,
		"fallback": "keyline-icons:square-half-sharp-fill",
	});
}

export default Component;
