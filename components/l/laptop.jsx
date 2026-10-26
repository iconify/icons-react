import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsg68bc0n.css';
import '../../css/g/gjg3sybli.css';
import '../../css/d/dcsigzbjh.css';
import '../../css/d/dsfcorb1g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qsg68bc0n"><path class="gjg3sybli"/><path class="dcsigzbjh"/><path class="dsfcorb1g"/></g>`,
		"fallback": "doodle-icons:laptop",
	});
}

export default Component;
