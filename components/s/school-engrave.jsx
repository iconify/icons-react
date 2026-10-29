import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/c65boqqfl.css';
import '../../css/q/qfyufmblv.css';
import '../../css/j/jdokwnbqk.css';
import '../../css/r/ro7gmvb1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="c65boqqfl"/><path class="qfyufmblv wm-shadow"/><path class="jdokwnbqk"/><path class="ro7gmvb1s"/></g>`,
		"fallback": "withicons:school-engrave",
	});
}

export default Component;
