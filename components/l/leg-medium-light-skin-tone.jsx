import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpyqy236k.css';
import '../../css/i/i9lmwgbsb.css';
import '../../css/z/zeke63bvq.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/f1hodz7-e.css';
import '../../css/e/e9evbnnhw.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wpyqy236k"><path class="i9lmwgbsb"/><path class="zeke63bvq"/></g><g class="jn8qy4bru"><path class="f1hodz7-e"/><path class="e9evbnnhw"/></g>`,
		"fallback": "openmoji:leg-medium-light-skin-tone",
	});
}

export default Component;
