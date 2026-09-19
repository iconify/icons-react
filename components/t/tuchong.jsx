import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvilx1q3c.css';
import '../../css/l/l0dq_6b7r.css';
import '../../css/v/v74u4eb-d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kvilx1q3c"><path class="l0dq_6b7r"/><path class="v74u4eb-d"/></g>`,
		"fallback": "icon-park:tuchong",
	});
}

export default Component;
