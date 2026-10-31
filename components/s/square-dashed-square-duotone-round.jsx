import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cr97ugmjt.css';
import '../../css/c/cozg1xwmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cr97ugmjt"/><path class="cozg1xwmy"/></g>`,
		"fallback": "coolicons:square-dashed-square-duotone-round",
	});
}

export default Component;
