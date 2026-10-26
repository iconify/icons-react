import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/f/fv5bnjbyf.css';
import '../../css/h/hh0r44boe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="fv5bnjbyf"/><path class="hh0r44boe"/></g>`,
		"fallback": "doodle-icons:notebook",
	});
}

export default Component;
