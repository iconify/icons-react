import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4dszidnj.css';
import '../../css/s/s682z5bvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f4dszidnj"/><path class="s682z5bvd"/></g>`,
		"fallback": "coolicons:square-dashed-square-bottom-right-duotone-round",
	});
}

export default Component;
