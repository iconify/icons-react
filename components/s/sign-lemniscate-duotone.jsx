import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n5k-fzgbq.css';
import '../../css/u/unfei-q4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n5k-fzgbq"/><path class="unfei-q4e"/></g>`,
		"fallback": "iconamoon:sign-lemniscate-duotone",
	});
}

export default Component;
