import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5moh7bqy.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uhj0qpbor.css';
import '../../css/p/pm_33z_9v.css';
import '../../css/a/ap98m_b0x.css';
import '../../css/w/w4_jmib7j.css';
import '../../css/m/m48j9y7th.css';
import '../../css/a/a2tgzz9vd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary y5moh7bqy"/><g class="dt0cm9dhy primary"><path class="uhj0qpbor"/><path class="pm_33z_9v"/><path class="ap98m_b0x"/><path class="w4_jmib7j"/><path class="m48j9y7th"/><path class="a2tgzz9vd"/></g>`,
		"fallback": "iconaut:nodes-cycle-duo",
	});
}

export default Component;
