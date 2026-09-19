import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nhdm79yuf.css';
import '../../css/v/v5gjhabzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nhdm79yuf"/><path class="v5gjhabzu"/></g>`,
		"fallback": "iconamoon:lightning-1-duotone",
	});
}

export default Component;
