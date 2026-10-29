import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a7buc6bao.css';
import '../../css/t/tygsh6hqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a7buc6bao"/><path class="tygsh6hqg"/></g>`,
		"fallback": "withicons:plane-duo",
	});
}

export default Component;
