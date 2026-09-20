import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxouekb2m.css';
import '../../css/a/agfevld8e.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/a/axggxtb5f.css';
import '../../css/a/at49vymej.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxouekb2m"/><path class="agfevld8e"/><g class="jn8qy4bru"><path class="axggxtb5f"/><path class="at49vymej"/></g>`,
		"fallback": "openmoji:swan",
	});
}

export default Component;
