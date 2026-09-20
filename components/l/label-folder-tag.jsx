import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/ff132kbhp.css';
import '../../css/u/u2z7bt9fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ff132kbhp"/><path class="u2z7bt9fv"/></g>`,
		"fallback": "streamline-sharp:label-folder-tag",
	});
}

export default Component;
