import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ecuvllbog.css';
import '../../css/m/m_wrpt7lk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="ecuvllbog"/><path class="m_wrpt7lk"/></g>`,
		"fallback": "quill:stack",
	});
}

export default Component;
