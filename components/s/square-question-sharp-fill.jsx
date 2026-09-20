import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gs1lw6mbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gs1lw6mbp"/>`,
		"fallback": "keyline-icons:square-question-sharp-fill",
	});
}

export default Component;
