import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jcsyqv5xp.css';
import '../../css/f/fph8jzbve.css';
import '../../css/h/hs4bpqzjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="jcsyqv5xp"/><rect class="fph8jzbve"/><path class="hs4bpqzjk"/></g>`,
		"fallback": "andrsrxn:panels-start-filled",
	});
}

export default Component;
