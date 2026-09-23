import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/se39f-ucb.css';
import '../../css/g/g7n8nl8gy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="se39f-ucb"/><path class="g7n8nl8gy"/></g>`,
		"fallback": "keyline-icons:refresh-cw-sparkles",
	});
}

export default Component;
