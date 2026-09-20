import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kyedt2luf.css';
import '../../css/j/jg724c96t.css';
import '../../css/y/y6is02bst.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kyedt2luf"/><path class="jg724c96t"/><path class="y6is02bst"/></g>`,
		"fallback": "streamline-color:padlock-square-1",
	});
}

export default Component;
