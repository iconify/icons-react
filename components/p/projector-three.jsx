import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ujf682zpg.css';
import '../../css/d/d8w_6pb2x.css';
import '../../css/y/ysyzwub0d.css';
import '../../css/y/yj6t9qbyp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ujf682zpg"/><path class="d8w_6pb2x"/><path class="ysyzwub0d"/><path class="yj6t9qbyp"/></g>`,
		"fallback": "icon-park-outline:projector-three",
	});
}

export default Component;
