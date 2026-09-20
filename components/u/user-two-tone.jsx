import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g3c-3divb.css';
import '../../css/d/d43qybptx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g3c-3divb"/><path class="d43qybptx"/></g>`,
		"fallback": "keyline-icons:user-two-tone",
	});
}

export default Component;
