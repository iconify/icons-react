import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/o/o_bifoc4v.css';
import '../../css/h/hsmgu8r4l.css';
import '../../css/i/irua4ub9a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><rect class="o_bifoc4v"/><ellipse class="hsmgu8r4l"/><path class="irua4ub9a"/></g>`,
		"fallback": "icon-park:pumpkin",
	});
}

export default Component;
