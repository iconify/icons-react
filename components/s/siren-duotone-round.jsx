import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eyqe9qq5v.css';
import '../../css/l/lyh6rpn2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eyqe9qq5v"/><path class="lyh6rpn2t"/></g>`,
		"fallback": "coolicons:siren-duotone-round",
	});
}

export default Component;
