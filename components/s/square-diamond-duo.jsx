import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhascub7w.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e77ebfb5e.css';
import '../../css/b/b4su85bjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary xhascub7w"/><g class="dt0cm9dhy primary"><path class="e77ebfb5e"/><path class="b4su85bjf"/></g>`,
		"fallback": "iconaut:square-diamond-duo",
	});
}

export default Component;
