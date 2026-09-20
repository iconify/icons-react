import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jsp63q5wp.css';
import '../../css/v/v_lbhubrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jsp63q5wp"/><path class="v_lbhubrs"/></g>`,
		"fallback": "keyline-icons:queue-duotone",
	});
}

export default Component;
