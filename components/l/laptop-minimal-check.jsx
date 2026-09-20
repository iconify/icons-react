import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eilqcxrxy.css';
import '../../css/z/zbyob2ocy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eilqcxrxy"/><rect class="zbyob2ocy"/></g>`,
		"fallback": "lucide:laptop-minimal-check",
	});
}

export default Component;
