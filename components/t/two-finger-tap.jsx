import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-7vzab-u.css';
import '../../css/l/ln18bmvuh.css';
import '../../css/w/w317sk7ve.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c-7vzab-u"/><path class="ln18bmvuh"/><path class="w317sk7ve"/></g>`,
		"fallback": "streamline-color:two-finger-tap",
	});
}

export default Component;
