import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjznjrqwa.css';
import '../../css/s/s-niwacno.css';
import '../../css/s/slnnvlwbq.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/slcqv0xey.css';
import '../../css/c/cg5t8p9ca.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjznjrqwa"/><path class="s-niwacno"/><path class="slnnvlwbq"/><g class="jn8qy4bru"><path class="slcqv0xey"/><path class="cg5t8p9ca"/></g>`,
		"fallback": "openmoji:placard",
	});
}

export default Component;
