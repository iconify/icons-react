import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vvgn6ib6j.css';
import '../../css/w/wwk9fhb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="vvgn6ib6j"/><path class="wwk9fhb9k"/></g>`,
		"fallback": "iconamoon:number-9-circle-thin",
	});
}

export default Component;
