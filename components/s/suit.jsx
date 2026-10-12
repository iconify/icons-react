import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u9vzwo86x.css';
import '../../css/w/whwvjwbiq.css';
import '../../css/h/hsviucbpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="u9vzwo86x"/><path class="whwvjwbiq"/><path class="hsviucbpz"/></g>`,
		"fallback": "andrsrxn:suit",
	});
}

export default Component;
