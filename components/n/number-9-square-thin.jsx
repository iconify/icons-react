import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_06fne0h.css';
import '../../css/w/wwk9fhb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j_06fne0h"/><path class="wwk9fhb9k"/></g>`,
		"fallback": "iconamoon:number-9-square-thin",
	});
}

export default Component;
