import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nhm3kcoqx.css';
import '../../css/o/ovzt3sbip.css';
import '../../css/w/w87_sfbqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="nhm3kcoqx"/><path class="ovzt3sbip"/><path class="w87_sfbqc wm-a"/></g>`,
		"fallback": "withicons:milk",
	});
}

export default Component;
