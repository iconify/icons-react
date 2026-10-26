import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/a/ahs4p_tot.css';
import '../../css/m/myspsvvfh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="ahs4p_tot"/><path class="myspsvvfh"/></g>`,
		"fallback": "doodle-icons:redo",
	});
}

export default Component;
