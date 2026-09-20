import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_jr94bor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h_jr94bor"/>`,
		"fallback": "keyline-icons:square-quarter-sharp-fill",
	});
}

export default Component;
