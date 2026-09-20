import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uj594pvkk.css';
import '../../css/a/aah62ybjq.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/a/aq3mqnb5c.css';
import '../../css/o/op3jkab0c.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uj594pvkk"/><path class="aah62ybjq"/><g class="ij2x_72vy"><path class="aq3mqnb5c"/><path class="op3jkab0c"/></g>`,
		"fallback": "openmoji:meat-on-bone",
	});
}

export default Component;
