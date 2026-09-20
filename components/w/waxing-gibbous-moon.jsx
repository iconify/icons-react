import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awrvu0bnu.css';
import '../../css/w/w4cjl-9wk.css';
import '../../css/d/dd6avbu6q.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/usozxnbrm.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGUQMhJb5k" class="awrvu0bnu"/></defs><use href="#SVGUQMhJb5k"/><circle class="w4cjl-9wk"/><path class="dd6avbu6q"/><g class="jn8qy4bru"><circle class="usozxnbrm"/><use href="#SVGUQMhJb5k"/></g>`,
		"fallback": "openmoji:waxing-gibbous-moon",
	});
}

export default Component;
