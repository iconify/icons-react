import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffww1eb2m.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/x/x2ylpqyvn.css';
import '../../css/b/bn-8nobfm.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffww1eb2m"/><g class="jn8qy4bru"><path class="x2ylpqyvn"/><path class="bn-8nobfm"/></g>`,
		"fallback": "openmoji:narwhal",
	});
}

export default Component;
