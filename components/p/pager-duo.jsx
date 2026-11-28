import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icgk-wbnx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sb-u7hbtr.css';
import '../../css/n/n7nnzhblg.css';
import '../../css/e/e5edqev6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icgk-wbnx secondary"/><g class="dt0cm9dhy primary"><path class="sb-u7hbtr"/><path class="n7nnzhblg"/><path class="e5edqev6a"/></g>`,
		"fallback": "iconaut:pager-duo",
	});
}

export default Component;
