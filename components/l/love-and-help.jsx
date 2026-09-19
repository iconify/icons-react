import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/t/t5lm5q0pz.css';
import '../../css/u/uk1hw4hsp.css';
import '../../css/a/aqj23kbhz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="t5lm5q0pz"/><path class="uk1hw4hsp"/><path class="aqj23kbhz"/></g>`,
		"fallback": "icon-park:love-and-help",
	});
}

export default Component;
