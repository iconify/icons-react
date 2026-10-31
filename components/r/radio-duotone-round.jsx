import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m3qgi09hz.css';
import '../../css/v/vq9zm5b1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m3qgi09hz"/><path class="vq9zm5b1v"/></g>`,
		"fallback": "coolicons:radio-duotone-round",
	});
}

export default Component;
