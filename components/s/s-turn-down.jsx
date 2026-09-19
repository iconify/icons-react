import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/w/wo_zr_q_a.css';
import '../../css/s/szey3hb9c.css';
import '../../css/e/ea6j4j8jp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="wo_zr_q_a"/><path class="szey3hb9c"/><circle class="ea6j4j8jp"/></g>`,
		"fallback": "icon-park-solid:s-turn-down",
	});
}

export default Component;
