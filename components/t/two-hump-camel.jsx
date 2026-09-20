import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/buesj7b-t.css';
import '../../css/m/m6ykrib3p.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/s28pbybii.css';
import '../../css/e/e2b97rfie.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="buesj7b-t"/><path class="m6ykrib3p"/><g class="jn8qy4bru"><path class="s28pbybii"/><path class="e2b97rfie"/></g>`,
		"fallback": "openmoji:two-hump-camel",
	});
}

export default Component;
