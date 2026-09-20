import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mamwigmuf.css';
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
		"content": `<path class="mamwigmuf"/><g class="jn8qy4bru"><path class="ejs0zacyb"/><path class="s7-oj7i7v"/></g>`,
		"fallback": "openmoji:palm-up-hand-medium-dark-skin-tone",
	});
}

export default Component;
