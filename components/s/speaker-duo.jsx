import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cew6qzb9g.css';
import '../../css/s/ss1-lqa1u.css';
import '../../css/j/jd4rp2b8v.css';
import '../../css/o/ob8g_evqe.css';
import '../../css/w/wx11lq4kg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cew6qzb9g"/><path class="ss1-lqa1u"/><path class="jd4rp2b8v"/><path class="ob8g_evqe"/><path class="wx11lq4kg"/></g>`,
		"fallback": "streamline-kameleon-color:speaker-duo",
	});
}

export default Component;
