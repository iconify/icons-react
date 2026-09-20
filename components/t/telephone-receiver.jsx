import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6k_wvbtn.css';
import '../../css/u/uox30dgvs.css';
import '../../css/u/u-9-purjb.css';
import '../../css/j/jn8qy4bru.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGX9VWxbLU" class="k6k_wvbtn"/></defs><path class="uox30dgvs"/><path class="u-9-purjb"/><g class="jn8qy4bru"><use href="#SVGX9VWxbLU"/><use href="#SVGX9VWxbLU"/></g>`,
		"fallback": "openmoji:telephone-receiver",
	});
}

export default Component;
