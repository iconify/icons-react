import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sbg04hbap.css';
import '../../css/r/rr9o28jjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sbg04hbap"/><path class="rr9o28jjf"/></g>`,
		"fallback": "coolicons:navigation-alt-duotone-round",
	});
}

export default Component;
