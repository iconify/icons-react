import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cge1kccrh.css';
import '../../css/b/bc0v9140b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cge1kccrh"/><path class="bc0v9140b"/></g>`,
		"fallback": "solar:user-circle-outline",
	});
}

export default Component;
