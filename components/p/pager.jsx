import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zl_izsb3t.css';
import '../../css/u/u2m1clbem.css';
import '../../css/h/h8z7x8vhi.css';
import '../../css/a/asyncdozy.css';
import '../../css/s/sycqn2b9e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zl_izsb3t"/><path class="u2m1clbem"/><path class="h8z7x8vhi"/><path class="asyncdozy"/><path class="sycqn2b9e"/></g>`,
		"fallback": "fluent-emoji-flat:pager",
	});
}

export default Component;
