import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zd3kdk2px.css';
import '../../css/n/n7wh0zbro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zd3kdk2px"/><path class="n7wh0zbro"/></g>`,
		"fallback": "coolicons:pill-duotone-round",
	});
}

export default Component;
