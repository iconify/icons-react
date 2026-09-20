import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iaz_9yn0b.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/e/ejs0zacyb.css';
import '../../css/s/s7-oj7i7v.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iaz_9yn0b"/><g class="jn8qy4bru"><path class="ejs0zacyb"/><path class="s7-oj7i7v"/></g>`,
		"fallback": "openmoji:palm-up-hand-light-skin-tone",
	});
}

export default Component;
