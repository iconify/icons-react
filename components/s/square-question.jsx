import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cc50cvs0o.css';
import '../../css/g/gz6_t9bsf.css';
import '../../css/j/ju8v6k8zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cc50cvs0o"/><path class="gz6_t9bsf"/><path class="ju8v6k8zc"/></g>`,
		"fallback": "keyline-icons:square-question",
	});
}

export default Component;
