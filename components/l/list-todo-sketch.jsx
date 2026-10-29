import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/s5lv8gbfq.css';
import '../../css/g/g2knpnl4g.css';
import '../../css/e/ecoxr8ars.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="s5lv8gbfq wm-k"/><path class="g2knpnl4g wm-a"/><path class="ecoxr8ars wm-a"/></g>`,
		"fallback": "withicons:list-todo-sketch",
	});
}

export default Component;
