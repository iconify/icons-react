import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/itutifldb.css';
import '../../css/s/swnmllrqo.css';
import '../../css/o/o6y-cchqn.css';
import '../../css/w/wc-w9abxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="itutifldb wm-k"/><path class="swnmllrqo wm-a"/><path class="o6y-cchqn wm-s"/><path class="wc-w9abxj"/></g>`,
		"fallback": "withicons-bauhaus:teapot",
	});
}

export default Component;
