import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jw8qqub9q.css';
import '../../css/p/pe14vrbci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="jw8qqub9q"/><path clip-rule="evenodd" class="pe14vrbci"/></g>`,
		"fallback": "keyline-icons:send-clock-sharp-fill",
	});
}

export default Component;
