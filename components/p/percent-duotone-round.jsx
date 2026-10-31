import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5hp29b1q.css';
import '../../css/a/a478hvbql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u5hp29b1q"/><path class="a478hvbql"/></g>`,
		"fallback": "coolicons:percent-duotone-round",
	});
}

export default Component;
