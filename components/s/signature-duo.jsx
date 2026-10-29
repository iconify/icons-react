import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z1gf-w-er.css';
import '../../css/q/qjoi1kboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z1gf-w-er"/><path class="qjoi1kboe wm-a"/></g>`,
		"fallback": "withicons:signature-duo",
	});
}

export default Component;
