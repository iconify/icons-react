import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/ho3figeqy.css';
import '../../css/b/bfe2v863c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ho3figeqy"/><path class="bfe2v863c"/></g>`,
		"fallback": "hugeicons:ratio",
	});
}

export default Component;
