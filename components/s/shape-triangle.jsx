import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yx44ypono.css';
import '../../css/v/v5wbjkbfy.css';
import '../../css/o/or_96bfod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yx44ypono"/><path class="v5wbjkbfy"/><path class="or_96bfod"/></g>`,
		"fallback": "streamline-ultimate-color:shape-triangle",
	});
}

export default Component;
