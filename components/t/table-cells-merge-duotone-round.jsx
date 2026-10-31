import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f0od-e5fx.css';
import '../../css/w/wwx1tlxlj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f0od-e5fx"/><path class="wwx1tlxlj"/></g>`,
		"fallback": "coolicons:table-cells-merge-duotone-round",
	});
}

export default Component;
